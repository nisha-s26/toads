#!/usr/bin/env python3
"""Generate global country page TypeScript data from source documents."""

from __future__ import annotations

import json
import re
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "src/views/global-pages/data"
DOWNLOADS = Path("/home/dell/Downloads")

SERVICE_TITLES = [
    "Generative AI Development",
    "AI Agent Development",
    "RAG Development & Enterprise Knowledge Base AI",
    "Private LLM Development Services",
    "AI Workflow Automation & Business Process Automation",
    "Machine Learning & Predictive Analytics",
    "Natural Language Processing & Conversational AI",
    "Computer Vision Development",
    "AI Infrastructure & MLOps",
    "Hire AI Developers & Dedicated AI Development Team",
    "AI Integration Services",
    "Predictive Analytics & Decision Intelligence",
    "Conversational AI & NLP",
    "AI Chatbot & Conversational AI",
    "LLM Development",
    "Enterprise AI Integration",
    "Machine Learning Development",
]

MD_SERVICE_TITLES = [
    "### Generative AI Development",
    "### AI Agent Development",
    "### RAG Development (Retrieval-Augmented Generation)",
    "### LLM Development",
    "### AI Chatbot & Conversational AI",
    "### Machine Learning Development",
    "### Enterprise AI Integration",
]


def docx_text(path: Path) -> str:
    with zipfile.ZipFile(path) as z:
        xml = z.read("word/document.xml")
    root = ET.fromstring(xml)
    texts: list[str] = []
    for t in root.iter("{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t"):
        if t.text:
            texts.append(t.text)
        if t.tail:
            texts.append(t.tail)
    return "".join(texts)


def ts_escape(s: str) -> str:
    return s.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")


def parse_seo(text: str) -> dict[str, str]:
    title = re.search(r"SEO Title:\s*(.+?)(?:Meta Description|$)", text)
    desc = re.search(r"Meta Description:\s*(.+?)(?:URL Slug|$)", text)
    slug = re.search(r"URL Slug:\s*(/ai-development-company-[a-z-]+)", text)
    return {
        "seoTitle": title.group(1).strip() if title else "",
        "metaDescription": desc.group(1).strip() if desc else "",
        "slug": slug.group(1) if slug else "",
    }


def split_services_block(block: str) -> list[dict[str, str]]:
    items: list[dict[str, str]] = []
    titles = sorted(SERVICE_TITLES, key=len, reverse=True)
    pos = 0
    while pos < len(block):
        match = None
        for title in titles:
            idx = block.find(title, pos)
            if idx == pos:
                match = title
                break
        if not match:
            break
        next_pos = len(block)
        for title in titles:
            idx = block.find(title, pos + len(match))
            if idx > pos and idx < next_pos:
                next_pos = idx
        desc = block[pos + len(match) : next_pos].strip()
        items.append({"title": match, "description": desc})
        pos = next_pos
    return items


def split_industries_block(block: str) -> list[dict[str, str]]:
    items: list[dict[str, str]] = []
    # Industry entries: "Title. Description" repeated; titles often contain & or end with sector words
    pattern = re.compile(
        r"([A-Z][^.]*?(?:& [A-Z][^.]*?|4\.0|Mobility|Services|Insurance|Sciences|Chain|Champions|E-commerce|AgTech|Sector))\.\s+(.+?)(?=(?:[A-Z][a-z]+(?: &|$)|Mittelstand|Retail|Government|Professional|AgTech|$))",
        re.S,
    )
    for m in pattern.finditer(block.strip()):
        items.append({"title": m.group(1).strip(), "description": m.group(2).strip()})
    if items:
        return items
    parts = re.split(r"(?<=[.!?])\s+(?=[A-Z&])", block.strip())
    for part in parts:
        part = part.strip()
        if not part:
            continue
        dot = part.find(". ")
        if dot == -1:
            items.append({"title": part.rstrip("."), "description": ""})
        else:
            items.append({"title": part[:dot].strip(), "description": part[dot + 2 :].strip()})
    return items


def split_why_paragraphs(block: str) -> list[str]:
    intro_split = re.split(r"\.\s+A few things set our approach apart\.", block, maxsplit=1)
    intro = intro_split[0].strip() + "." if intro_split else ""
    rest = intro_split[1].strip() if len(intro_split) > 1 else block
    points: list[str] = []
    if intro and intro != ".":
        points.append(intro)
    chunks = re.split(r"(?<=[.!?])\s+(?=We )", rest)
    for chunk in chunks:
        chunk = chunk.strip()
        if chunk:
            points.append(chunk)
    return points


def split_process_steps(block: str) -> list[dict[str, str]]:
    steps: list[dict[str, str]] = []
    chunks = re.split(r"(?=\d+\.\s)", block)
    for chunk in chunks:
        chunk = chunk.strip()
        if not chunk:
            continue
        m = re.match(r"(\d+)\.\s+([^\.]+)\.\s+(.*)", chunk, re.S)
        if m:
            steps.append({"num": m.group(1), "title": m.group(2).strip(), "description": m.group(3).strip()})
    return steps


def split_faqs(block: str) -> list[dict[str, str]]:
    faqs: list[dict[str, str]] = []
    questions = re.findall(
        r"(What does an AI development company[^?]+\?|How much does AI development[^?]+\?|What are AI agents[^?]+\?|What is Generative AI[^?]+\?|What is RAG[^?]+\?|Why hire an AI development company[^?]+\?|How long does[^?]+\?|Is my data safe[^?]+\?|Do you build AI solutions[^?]+\?|Which AI models[^?]+\?|Can you integrate AI[^?]+\?|Does the EU AI Act[^?]+\?|Do you offer ongoing support[^?]+\?|How do you ensure AI compliance[^?]+\?|Can Toadsters help us hire[^?]+\?|Is Toadsters[^?]+\?|How does Toadsters handle[^?]+\?|Does Toadsters work with startups[^?]+\?|Can you build a private[^?]+\?|Do you offer dedicated[^?]+\?|What industries do you[^?]+\?|What happens after[^?]+\?|How do we get started[^?]+\?|What support do you provide[^?]+\?|Is AI development a good investment[^?]+\?|What is the difference between fine-tuning[^?]+\?|Can you integrate AI into our existing[^?]+\?)",
        block,
    )
    for q in questions:
        start = block.find(q)
        if start == -1:
            continue
        answer_start = start + len(q)
        next_q = len(block)
        for q2 in questions:
            idx = block.find(q2, answer_start)
            if idx > answer_start and idx < next_q:
                next_q = idx
        answer = block[answer_start:next_q].strip()
        faqs.append({"question": q.strip(), "answer": answer})
    return faqs


def parse_docx_country(text: str, country_label: str) -> dict:
    seo = parse_seo(text)
    slug_marker = seo["slug"]
    body = text.split(slug_marker, 1)[-1] if slug_marker else text

    hero_title = f"AI Development Company in {country_label}"
    hero_start = body.find(hero_title)
    hero_end = body.find("Book a Free AI Strategy Call")
    hero_intro = body[hero_start + len(hero_title) : hero_end].strip() if hero_start != -1 else ""

    why_start = body.find(f"Why Businesses in {country_label} Choose Toadsters")
    if why_start == -1:
        why_start = body.find("Why Businesses in the UAE Choose Toadsters")
    services_start = body.find("AI Development Services We Offer")
    why_block = body[why_start : services_start].replace(f"Why Businesses in {country_label} Choose Toadsters", "").replace("Why Businesses in the UAE Choose Toadsters", "").strip() if why_start != -1 else ""

    industries_start = body.find(f"Industries We Serve in {country_label}")
    if industries_start == -1:
        industries_start = body.find("Industries We Serve in the UAE")
    trends_start = body.find("AI Adoption Trends and Opportunities in")
    services_block = body[services_start + len("AI Development Services We Offer") : industries_start].strip() if services_start != -1 else ""

    process_start = body.find("Our AI Development Process")
    trends_block = body[trends_start : process_start].strip() if trends_start != -1 else ""
    if trends_block.startswith("AI Adoption Trends"):
        trends_block = re.sub(r"^AI Adoption Trends and Opportunities in [^A]+", "", trends_block).strip()

    why_choose_toadsters_start = body.find("Why Choose Toadsters")
    faq_start = body.find("FAQs")
    process_block = body[process_start + len("Our AI Development Process") : why_choose_toadsters_start].strip() if process_start != -1 else ""
    why_toadsters_block = body[why_choose_toadsters_start + len("Why Choose Toadsters") : faq_start].strip() if why_choose_toadsters_start != -1 else ""

    cta_start = body.find("Final CTA")
    faq_block = body[faq_start + len("FAQs") : cta_start].strip() if faq_start != -1 else body[faq_start + len("FAQs") :].strip() if faq_start != -1 else ""
    cta_block = body[cta_start:].replace("Final CTA", "").strip() if cta_start != -1 else ""

    industries_block = body[industries_start : trends_start].strip() if industries_start != -1 else ""
    industries_block = re.sub(r"^Industries We Serve in [^A]+", "", industries_block).strip()

    return {
        **seo,
        "country": country_label,
        "heroTitle": hero_title,
        "heroIntro": hero_intro,
        "whyChooseIntro": why_block.split(" A few things")[0].strip() if why_block else "",
        "whyChoosePoints": split_why_paragraphs(why_block),
        "services": split_services_block(services_block),
        "industries": split_industries_block(industries_block),
        "trends": trends_block,
        "processSteps": split_process_steps(process_block),
        "whyToadsters": why_toadsters_block,
        "faqs": split_faqs(faq_block),
        "ctaTitle": "Ready to Build AI That Actually Works for Your Business?",
        "ctaBody": cta_block.replace("Ready to Build AI That Actually Works for Your Business?", "").strip(),
        "ctaPrimary": "Book Your Free AI Strategy Call",
        "ctaSecondary": "Talk to Our AI Development Team",
    }


def parse_md_country(path: Path, country_label: str) -> dict:
    text = path.read_text(encoding="utf-8")
    seo_title = re.search(r"\*\*SEO Meta Title.*?\*\*\n(.+)", text)
    meta = re.search(r"\*\*Meta Description.*?\*\*\n(.+)", text)
    slug = re.search(r"\*\*URL Slug:\*\*\n(/ai-development-company-[a-z-]+)", text)

    hero_heading = re.search(r"### (.+?)\n\n(.+?)(?=\*\*Book a free|\[Book a Call)", text, re.S)
    why_block = re.search(r"## Why .+? Work With Toadsters\n\n(.+?)(?=---\n\n## What We Build)", text, re.S)
    services_block = re.search(r"## What We Build\n\n(.+?)(?=---\n\n## Industries)", text, re.S)
    industries_block = re.search(r"## Industries We Know\n\n(.+?)(?=---\n\n## Where)", text, re.S)
    challenges_block = re.search(r"## Where .+?\n\n(.+?)(?=---\n\n## How We Work)", text, re.S)
    process_block = re.search(r"## How We Work\n\n(.+?)(?=---\n\n## Why Companies)", text, re.S)
    why_toadsters = re.search(r"## Why Companies Choose Toadsters\n\n(.+?)(?=---\n\n## Frequently)", text, re.S)
    faq_block = re.search(r"## Frequently Asked Questions\n\n(.+?)(?=---\n\n## Let's Build)", text, re.S)
    cta_block = re.search(r"## Let's Build Something That Actually Works\n\n(.+)", text, re.S)

    services: list[dict[str, str]] = []
    if services_block:
        chunks = re.split(r"### ", services_block.group(1))
        for chunk in chunks:
            chunk = chunk.strip()
            if not chunk:
                continue
            lines = chunk.split("\n", 1)
            services.append({"title": lines[0].strip(), "description": lines[1].strip() if len(lines) > 1 else ""})

    industries: list[dict[str, str]] = []
    if industries_block:
        for line in industries_block.group(1).strip().split("\n"):
            line = line.strip()
            if not line.startswith("**"):
                continue
            m = re.match(r"\*\*(.+?)\*\* — (.+)", line)
            if m:
                industries.append({"title": m.group(1), "description": m.group(2)})

    why_points: list[str] = []
    if why_block:
        for m in re.finditer(r"\*\*(.+?)\*\*\s*(.+?)(?=\*\*|$)", why_block.group(1), re.S):
            why_points.append(f"{m.group(1).strip()} {m.group(2).strip()}")

    process_steps: list[dict[str, str]] = []
    if process_block:
        for m in re.finditer(r"\*\*(.+?)\.\*\*\s*(.+?)(?=\*\*|$)", process_block.group(1), re.S):
            process_steps.append({"num": str(len(process_steps) + 1), "title": m.group(1).strip(), "description": m.group(2).strip()})

    faqs: list[dict[str, str]] = []
    if faq_block:
        for m in re.finditer(r"\*\*\d+\.\s(.+?)\*\*\n(.+?)(?=\*\*\d+\.|$)", faq_block.group(1), re.S):
            faqs.append({"question": m.group(1).strip(), "answer": m.group(2).strip()})

    cta_text = cta_block.group(1).strip() if cta_block else ""
    cta_title = "Let's Build Something That Actually Works"
    cta_body = cta_text
    cta_primary = "Book a free strategy call and find out if we're the right fit."

    return {
        "seoTitle": seo_title.group(1).strip() if seo_title else "",
        "metaDescription": meta.group(1).strip() if meta else "",
        "slug": slug.group(1) if slug else "",
        "country": country_label,
        "heroTitle": f"AI Development Company in {country_label}",
        "heroSubtitle": hero_heading.group(1).strip() if hero_heading else "",
        "heroIntro": hero_heading.group(2).strip() if hero_heading else "",
        "whyChooseIntro": "",
        "whyChoosePoints": why_points,
        "services": services,
        "industries": industries,
        "trends": challenges_block.group(1).strip() if challenges_block else "",
        "processSteps": process_steps,
        "whyToadsters": why_toadsters.group(1).strip() if why_toadsters else "",
        "faqs": faqs,
        "ctaTitle": cta_title,
        "ctaBody": cta_body,
        "ctaPrimary": cta_primary,
        "ctaSecondary": "Schedule Your Free Consultation",
    }


def write_ts(key: str, data: dict) -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    path = OUT / f"{key}.ts"
    content = f"import type {{ GlobalCountryPageData }} from '../types'\n\n"
    content += f"export const {key.upper().replace('-', '_')}_PAGE: GlobalCountryPageData = "
    content += json.dumps(data, indent=2, ensure_ascii=False)
    content += "\n"
    path.write_text(content, encoding="utf-8")
    print(f"Wrote {path}")


def parse_singapore_html(html: str) -> dict:
    def extract_section(after: str, until: str) -> str:
        start = html.find(after)
        if start == -1:
            return ""
        start += len(after)
        end = html.find(until, start)
        return html[start:end] if end != -1 else html[start:]

    def strip_tags(s: str) -> str:
        s = re.sub(r"<script[^>]*>.*?</script>", "", s, flags=re.S)
        s = re.sub(r"<style[^>]*>.*?</style>", "", s, flags=re.S)
        s = re.sub(r"<[^>]+>", " ", s)
        s = re.sub(r"\s+", " ", s)
        return s.strip()

    why_html = extract_section("Why Singapore Businesses Choose Toadsters", "<!-- ═")
    why_points: list[str] = []
    for m in re.finditer(r"<h4>(.+?)</h4>\s*<p>(.+?)</p>", why_html, re.S):
        why_points.append(f"{strip_tags(m.group(1))} {strip_tags(m.group(2))}")

    services: list[dict[str, str]] = []
    services_html = extract_section('id="services"', "<!-- ═")
    for m in re.finditer(r"<h3>(.+?)</h3>\s*<p>(.+?)</p>", services_html, re.S):
        services.append({"title": strip_tags(m.group(1)), "description": strip_tags(m.group(2))})

    industries: list[dict[str, str]] = []
    ind_html = extract_section("Industries We Serve in Singapore", "<!-- ═")
    for m in re.finditer(r'<span class="chip-name">(.+?)</span>', ind_html):
        industries.append({"title": strip_tags(m.group(1)), "description": ""})

    process_steps: list[dict[str, str]] = []
    proc_html = extract_section("Our AI Development Process", "<!-- ═")
    for i, m in enumerate(re.finditer(r"<h4>(.+?)</h4>\s*<p>(.+?)</p>", proc_html, re.S), 1):
        process_steps.append({"num": str(i), "title": strip_tags(m.group(1)), "description": strip_tags(m.group(2))})

    faqs: list[dict[str, str]] = []
    faq_html = extract_section("Questions We Get From Singapore Businesses", "<!-- ═")
    for m in re.finditer(r'<summary class="faq-q">(.+?)</summary>\s*<div class="faq-a">\s*<p>(.+?)</p>', faq_html, re.S):
        faqs.append({"question": strip_tags(m.group(1)), "answer": strip_tags(m.group(2))})

    trends_html = extract_section("AI Adoption in Singapore", "<!-- ═")
    trends = strip_tags(trends_html)[:2500]

    return {
        "key": "singapore",
        "seoTitle": "AI Development Company in Singapore | Toadsters Technologies",
        "metaDescription": "Toadsters Technologies is a leading AI development company in Singapore, building custom AI agents, LLM solutions, RAG systems, and enterprise automation for startups, SMBs, and large enterprises across Southeast Asia.",
        "slug": "/ai-development-company-singapore",
        "country": "Singapore",
        "heroTitle": "AI Development Company in Singapore",
        "heroSubtitle": "Build AI That Works for Your Business, Not the Other Way Around",
        "heroIntro": "Toadsters Technologies partners with Singapore startups, SMBs, and enterprises to design, develop, and deploy production-ready AI systems — from custom LLMs and AI agents to enterprise automation and RAG-powered knowledge tools.",
        "whyChooseIntro": "Singapore is not short of technology vendors. What businesses here need is an AI development partner who understands both the technical complexity and the business context — someone who can tell you when AI is the right answer and how to implement it without creating expensive technical debt.",
        "whyChoosePoints": why_points,
        "services": services,
        "industries": industries,
        "trends": trends,
        "processSteps": process_steps,
        "whyToadsters": "",
        "faqs": faqs,
        "ctaTitle": "Ready to Build AI That Actually Works?",
        "ctaBody": "Talk to our team about your use case. No generic pitch decks — just an honest conversation about what AI can do for your business, what it will cost, and how long it will take.",
        "ctaPrimary": "Schedule a Discovery Call",
        "ctaSecondary": "Send Us a Brief",
    }


def main() -> None:
    docx_sources = [
        ("germany", "Germany", DOWNLOADS / "AI-Development-Company-Germany.docx"),
        ("uae", "UAE", DOWNLOADS / "AI-Development-Company-UAE.docx"),
        ("saudi-arabia", "Saudi Arabia", DOWNLOADS / "AI-Development-Company-Saudi-Arabia.docx"),
        ("australia", "Australia", DOWNLOADS / "AI-Development-Company-Australia.docx"),
    ]
    md_sources = [
        ("usa", "USA", DOWNLOADS / "toadsters-ai-development-company-usa.md"),
        ("uk", "UK", DOWNLOADS / "toadsters-ai-development-company-uk.md"),
        ("canada", "Canada", DOWNLOADS / "toadsters-ai-development-company-canada.md"),
        ("india", "India", DOWNLOADS / "toadsters-ai-development-company-india-v2.md"),
    ]

    all_keys = []
    for key, label, path in docx_sources:
        data = parse_docx_country(docx_text(path), label)
        data["key"] = key
        write_ts(key, data)
        all_keys.append(key)

    for key, label, path in md_sources:
        data = parse_md_country(path, label.replace("the ", "").title() if key != "usa" else "the USA")
        if key == "usa":
            data["country"] = "the USA"
        data["key"] = key
        write_ts(key, data)
        all_keys.append(key)

    sg_html = (DOWNLOADS / "toadsters-singapore-ai-landing.html").read_text(encoding="utf-8")
    sg = parse_singapore_html(sg_html)
    write_ts("singapore", sg)
    all_keys.append("singapore")

    registry = OUT.parent / "registry.ts"
    imports = "\n".join(
        f"import {{ {k.upper().replace('-', '_')}_PAGE }} from './data/{k}'" for k in all_keys
    )
    entries = ",\n  ".join(f'"{k}": {k.upper().replace("-", "_")}_PAGE' for k in all_keys)
    registry.write_text(
        f"""{imports}
import type {{ GlobalCountryPageData }} from './types'

export const GLOBAL_COUNTRY_PAGES: Record<string, GlobalCountryPageData> = {{
  {entries},
}}

export const GLOBAL_COUNTRY_NAV = Object.values(GLOBAL_COUNTRY_PAGES).map((page) => ({{
  key: page.key,
  label: page.country,
  href: page.slug,
  description: page.metaDescription,
}}))
""",
        encoding="utf-8",
    )
    print(f"Wrote {registry}")


if __name__ == "__main__":
    main()
