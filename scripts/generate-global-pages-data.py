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
CITY_OUT = OUT / "cities"
DOWNLOADS = Path("/home/dell/Downloads")

SERVICE_TITLES = [
    "Generative AI Development",
    "AI Agent Development",
    "RAG Development & Enterprise Knowledge Base AI",
    "RAG & Enterprise Knowledge Platforms",
    "Private LLM Development",
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


def extract_slug(text: str) -> str:
    marker = re.search(r"(?:URL Slug|URL SLUG):\s*", text, re.I)
    if not marker:
        return ""
    rest = text[marker.end():]
    slug_match = re.search(r"/ai-development-company-[a-z0-9-]+", rest, re.I)
    if not slug_match:
        return ""
    slug = slug_match.group(0)
    # Docx sources often glue section text onto the slug without a space (e.g. germanyAI, delhiPRIMARY).
    slug = re.sub(r"(PRIMARY|AI)$", "", slug, flags=re.I)
    return slug.lower()


def parse_seo(text: str) -> dict[str, str]:
    title = re.search(r"(?:SEO Title|SEO TITLE)(?:\s*\([^)]*\))?:\s*(.+?)(?:Meta Description|META DESCRIPTION|$)", text, re.I | re.S)
    desc = re.search(
        r"(?:Meta Description|META DESCRIPTION)(?:\s*\([^)]*\))?:\s*(.+?)(?:URL Slug|URL SLUG|$)",
        text,
        re.I | re.S,
    )
    slug = extract_slug(text)
    return {
        "seoTitle": re.sub(r"\s+", " ", title.group(1)).strip() if title else "",
        "metaDescription": re.sub(r"\s+", " ", desc.group(1)).strip() if desc else "",
        "slug": slug,
    }


def split_services_block(block: str) -> list[dict[str, str]]:
    if not block.strip():
        return []
    items: list[dict[str, str]] = []
    titles = sorted(SERVICE_TITLES, key=len, reverse=True)
    matches: list[tuple[int, str]] = []
    for title in titles:
        start = 0
        while True:
            idx = block.find(title, start)
            if idx == -1:
                break
            matches.append((idx, title))
            start = idx + len(title)
    if not matches:
        return []
    matches.sort(key=lambda item: item[0])
    deduped: list[tuple[int, str]] = []
    for start, title in matches:
        if any(start >= s and start < s + len(t) for s, t in deduped):
            continue
        deduped.append((start, title))
    deduped.sort(key=lambda item: item[0])
    for i, (start, title) in enumerate(deduped):
        end = deduped[i + 1][0] if i + 1 < len(deduped) else len(block)
        desc = block[start + len(title) : end].strip()
        items.append({"title": title, "description": desc})
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
    step_parts = re.split(r"(?=Step \d+:)", block)
    if len(step_parts) > 1:
        for part in step_parts:
            part = part.strip()
            if not part:
                continue
            m = re.match(r"Step (\d+):\s*(.+)", part, re.S)
            if not m:
                continue
            content = m.group(2).strip()
            desc_start = re.search(r"(We |For |This |At |In |Every |A team|An )", content)
            if desc_start and desc_start.start() > 0:
                title = content[:desc_start.start()].strip()
                description = content[desc_start.start():].strip()
            else:
                dot = content.find(". ")
                if dot > 0 and dot < 80:
                    title = content[:dot].strip()
                    description = content[dot + 2 :].strip()
                else:
                    title = content[:72].strip()
                    description = content
            steps.append({"num": m.group(1), "title": title, "description": description})
        if steps:
            return steps

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
        r"(What does an AI development company[^?]+\?|How much does AI development[^?]+\?|What are AI agents[^?]+\?|What is Generative AI[^?]+\?|What is RAG[^?]+\?|Why hire an AI development company[^?]+\?|How long does[^?]+\?|Is my data safe[^?]+\?|Do you build AI solutions[^?]+\?|Which AI models[^?]+\?|Can you integrate AI[^?]+\?|Does the EU AI Act[^?]+\?|Do you offer ongoing support[^?]+\?|How do you ensure AI compliance[^?]+\?|Can Toadster help us hire[^?]+\?|Is Toadster[^?]+\?|How does Toadster handle[^?]+\?|Does Toadster work with startups[^?]+\?|Can you build a private[^?]+\?|Do you offer dedicated[^?]+\?|What industries do you[^?]+\?|What happens after[^?]+\?|How do we get started[^?]+\?|What support do you provide[^?]+\?|Is AI development a good investment[^?]+\?|What is the difference between fine-tuning[^?]+\?|Can you integrate AI into our existing[^?]+\?)",
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


def find_why_section_start(body: str, label: str) -> int:
    patterns = [
        f"Why Businesses in {label} Choose Toadster",
        f"Why Businesses in {label} Choose Toadster",
        f"Why {label} Businesses Choose Toadster",
        f"Why {label} and NCR Businesses Choose Toadster",
    ]
    for pattern in patterns:
        idx = body.find(pattern)
        if idx != -1:
            return idx
    return -1


def find_industries_start(body: str, label: str) -> int:
    patterns = [
        f"Industries We Serve in {label}",
        f"Industries We Serve in {label} NCR",
    ]
    for pattern in patterns:
        idx = body.find(pattern)
        if idx != -1:
            return idx
    return -1


def card_description(text: str, max_len: int = 120) -> str:
    clean = re.sub(r"\s+", " ", text).strip()
    if len(clean) <= max_len:
        return clean
    cut = clean[:max_len]
    last_space = cut.rfind(" ")
    return (cut[:last_space] if last_space > max_len * 0.55 else cut).strip() + "…"


def parse_docx_country(text: str, country_label: str) -> dict:
    seo = parse_seo(text)
    slug_marker = seo["slug"]
    body = text.split(slug_marker, 1)[-1] if slug_marker else text

    hero_title = f"AI Development Company in {country_label}"
    hero_start = body.find(hero_title)
    hero_end = body.find("Book a Free AI Strategy Call")
    if hero_end == -1:
        hero_end = body.find("Book a Strategy Call")
    hero_intro = body[hero_start + len(hero_title) : hero_end].strip() if hero_start != -1 else ""

    why_start = find_why_section_start(body, country_label)
    services_start = body.find("AI Development Services We Offer")
    why_block = ""
    if why_start != -1 and services_start != -1:
        why_heading_end = body.find("\n", why_start)
        if why_heading_end == -1:
            why_heading_end = why_start + 40
        why_block = body[why_heading_end : services_start].strip()

    industries_start = find_industries_start(body, country_label)
    trends_start = body.find("AI Adoption Trends and Opportunities in")
    if trends_start == -1:
        trends_start = body.find("AI Adoption in ")
    services_end = industries_start if industries_start != -1 else trends_start
    if services_end == -1:
        services_end = body.find("Our AI Development Process")
    services_block = body[services_start + len("AI Development Services We Offer") : services_end].strip() if services_start != -1 and services_end != -1 else ""

    process_start = body.find("Our AI Development Process")
    trends_block = body[trends_start : process_start].strip() if trends_start != -1 and process_start != -1 else ""
    if trends_block.startswith("AI Adoption Trends"):
        trends_block = re.sub(r"^AI Adoption Trends and Opportunities in [^A]+", "", trends_block).strip()

    why_choose_Toadster_start = body.find("Why Choose Toadster")
    faq_start = body.find("FAQs")
    if faq_start == -1:
        faq_start = body.find("Frequently Asked Questions")
    process_block = body[process_start + len("Our AI Development Process") : why_choose_Toadster_start].strip() if process_start != -1 and why_choose_Toadster_start != -1 else ""
    why_Toadster_block = body[why_choose_Toadster_start + len("Why Choose Toadster") : faq_start].strip() if why_choose_Toadster_start != -1 and faq_start != -1 else ""

    cta_start = body.find("Final CTA")
    faq_block = body[faq_start : cta_start].strip() if faq_start != -1 and cta_start != -1 else body[faq_start:].strip() if faq_start != -1 else ""
    if faq_block.startswith("FAQs"):
        faq_block = faq_block[len("FAQs") :].strip()
    if faq_block.startswith("Frequently Asked Questions"):
        faq_block = faq_block[len("Frequently Asked Questions") :].strip()

    cta_block = body[cta_start:].replace("Final CTA", "").strip() if cta_start != -1 else ""

    industries_block = body[industries_start : trends_start].strip() if industries_start != -1 and trends_start != -1 else ""
    if industries_block:
        industries_block = re.sub(r"^Industries We Serve in [^A\n]+", "", industries_block).strip()

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
        "whyToadster": why_Toadster_block,
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
    why_block = re.search(r"## Why .+? Work With Toadsters?\n\n(.+?)(?=---\n\n## What We Build)", text, re.S)
    services_block = re.search(r"## What We Build\n\n(.+?)(?=---\n\n## (?:Industries|Where))", text, re.S)
    industries_block = re.search(r"## Industries We Know\n\n(.+?)(?=---\n\n## Where)", text, re.S)
    challenges_block = re.search(r"## Where .+?\n\n(.+?)(?=---\n\n## How We Work)", text, re.S)
    process_block = re.search(r"## How We Work\n\n(.+?)(?=---\n\n## Why Companies)", text, re.S)
    why_Toadster = re.search(r"## Why Companies Choose Toadster\n\n(.+?)(?=---\n\n## Frequently)", text, re.S)
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
            m = re.match(r"\*\*(.+?)\*\* - (.+)", line)
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
        "whyToadster": why_Toadster.group(1).strip() if why_Toadster else "",
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


def write_city_ts(key: str, data: dict) -> None:
    CITY_OUT.mkdir(parents=True, exist_ok=True)
    path = CITY_OUT / f"{key}.ts"
    const = key.upper().replace("-", "_")
    content = f"import type {{ GlobalCityPageData }} from '../../types'\n\n"
    content += f"export const {const}_PAGE: GlobalCityPageData = "
    content += json.dumps(data, indent=2, ensure_ascii=False)
    content += "\n"
    path.write_text(content, encoding="utf-8")
    print(f"Wrote {path}")


def parse_md_city(path: Path, city_label: str, parent_country_key: str) -> dict:
    data = parse_md_country(path, city_label)
    data["country"] = city_label
    data["heroTitle"] = f"AI Development Company in {city_label}"
    data["parentCountryKey"] = parent_country_key
    data["exploreCardDescription"] = card_description(data.get("heroIntro", ""))
    return data


def slice_between(text: str, start: str, end_markers: list[str]) -> str:
    idx = text.find(start)
    if idx == -1:
        return ""
    idx += len(start)
    end = len(text)
    for marker in end_markers:
        found = text.find(marker, idx)
        if found != -1 and found < end:
            end = found
    return text[idx:end].strip()


def parse_landing_docx_city(path: Path, city_label: str, parent_country_key: str) -> dict:
    text = docx_text(path)
    seo = parse_seo(text)
    if seo.get("slug", "").endswith("AI"):
        seo["slug"] = seo["slug"][:-2]

    city_upper = city_label.upper()
    hero_raw = slice_between(text, "HERO SECTION", [f"WHY {city_upper}", f"Why {city_label}"])
    hero_intro = re.sub(
        rf"AI Development Company in {re.escape(city_label)}\s*-[^.]*\.\s*",
        "",
        hero_raw,
        count=1,
    ).strip()
    hero_intro = re.split(r"USD \$|SAR \d|\d+\.\d+%Saudi", hero_intro)[0].strip()

    why_marker = f"Why {city_label} Businesses Choose Toadster"
    why_block = slice_between(
        text,
        why_marker,
        ["AI DEVELOPMENT SERVICES", "AI Development Services We Offer"],
    )
    why_block = re.sub(rf"{re.escape(why_marker)}", "", why_block, flags=re.I).strip()
    why_intro = re.split(r"0?1\.\s", why_block, maxsplit=1)[0].strip()
    why_points: list[str] = []
    for match in re.finditer(r"\d{2}\.\s(.+?)(?=\d{2}\.\s|$)", why_block, re.S):
        point = match.group(1).strip()
        if point:
            why_points.append(point)

    services_block = slice_between(
        text,
        "AI Development Services We Offer",
        ["AI ADOPTION", "AI Adoption Trends"],
    )
    services = split_services_block(services_block)

    trends_block = slice_between(
        text,
        "AI Adoption Trends and Opportunities",
        ["OUR AI DEVELOPMENT PROCESS", "Our AI Development Process"],
    )
    trends_block = re.sub(
        rf"^AI Adoption Trends and Opportunities in {re.escape(city_label)}",
        "",
        trends_block,
    ).strip()

    process_block = slice_between(
        text,
        "Our AI Development Process",
        ["WHY CHOOSE TOADSTER", "Why Choose Toadster"],
    )
    process_block = re.sub(r"^Our AI Development Process", "", process_block).strip()
    process_steps = split_process_steps(process_block)

    why_toadster = slice_between(
        text,
        f"Why Choose Toadster as Your {city_label} AI Development Partner",
        ["FREQUENTLY ASKED", "Frequently Asked Questions"],
    )

    faq_block = slice_between(
        text,
        "Frequently Asked Questions",
        ["GET STARTED", "Ready to Build AI That Works"],
    )
    faq_block = re.sub(
        r"^Frequently Asked Questions.*?most often about AI development.*?\.\s*",
        "",
        faq_block,
        flags=re.S,
    ).strip()
    faqs = split_faqs(faq_block)

    cta_body = slice_between(
        text,
        f"Ready to Build AI That Works for Your {city_label} Business?",
        ["KEYWORD DISTRIBUTION", "Serving startups"],
    )

    return {
        **seo,
        "country": city_label,
        "heroTitle": f"AI Development Company in {city_label}",
        "heroIntro": hero_intro,
        "whyChooseIntro": why_intro,
        "whyChoosePoints": why_points or ([why_intro] if why_intro else []),
        "services": services,
        "industries": [],
        "trends": trends_block,
        "processSteps": process_steps,
        "whyToadster": why_toadster,
        "faqs": faqs,
        "ctaTitle": f"Ready to Build AI That Works for Your {city_label} Business?",
        "ctaBody": cta_body,
        "ctaPrimary": "Schedule a Discovery Call",
        "ctaSecondary": "Send Us a Project Brief",
        "parentCountryKey": parent_country_key,
        "exploreCardDescription": card_description(hero_intro),
    }


def parse_docx_city(path: Path, city_label: str, parent_country_key: str) -> dict:
    text = docx_text(path)
    if "HERO SECTION" in text and "AI Development Services We Offer" in text:
        return parse_landing_docx_city(path, city_label, parent_country_key)
    data = parse_docx_country(text, city_label)
    data["parentCountryKey"] = parent_country_key
    data["exploreCardDescription"] = card_description(data.get("heroIntro", ""))
    return data


def write_city_registry(city_keys: list[str], city_parents: dict[str, str]) -> None:
    registry = OUT.parent / "city-registry.ts"
    imports = "\n".join(
        f"import {{ {k.upper().replace('-', '_')}_PAGE }} from './data/cities/{k}'" for k in city_keys
    )
    entries = ",\n  ".join(f'"{k}": {k.upper().replace("-", "_")}_PAGE' for k in city_keys)
    by_country: dict[str, list[str]] = {}
    for key, parent in city_parents.items():
        by_country.setdefault(parent, []).append(key)
    parent_lines = ",\n  ".join(f'"{country}": {json.dumps(keys)}' for country, keys in sorted(by_country.items()))

    registry.write_text(
        f"""{imports}
import type {{ GlobalCityPageData }} from './types'

export const GLOBAL_CITY_PAGES: Record<string, GlobalCityPageData> = {{
  {entries},
}}

export const GLOBAL_CITY_SLUGS = Object.keys(GLOBAL_CITY_PAGES)

export const CITIES_BY_COUNTRY: Record<string, string[]> = {{
  {parent_lines},
}}

export function getCitiesForCountry(countryKey: string): GlobalCityPageData[] {{
  const keys = CITIES_BY_COUNTRY[countryKey] ?? []
  return keys.map((key) => GLOBAL_CITY_PAGES[key]).filter(Boolean)
}}
""",
        encoding="utf-8",
    )
    print(f"Wrote {registry}")


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

    why_html = extract_section("Why Singapore Businesses Choose Toadster", "<!-- ═")
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
        "seoTitle": "AI Development Company in Singapore | Toadster Technologies",
        "metaDescription": "Toadster Technologies is a leading AI development company in Singapore, building custom AI agents, LLM solutions, RAG systems, and enterprise automation for startups, SMBs, and large enterprises across Southeast Asia.",
        "slug": "/ai-development-company-singapore",
        "country": "Singapore",
        "heroTitle": "AI Development Company in Singapore",
        "heroSubtitle": "Build AI That Works for Your Business, Not the Other Way Around",
        "heroIntro": "Toadster Technologies partners with Singapore startups, SMBs, and enterprises to design, develop, and deploy production-ready AI systems - from custom LLMs and AI agents to enterprise automation and RAG-powered knowledge tools.",
        "whyChooseIntro": "Singapore is not short of technology vendors. What businesses here need is an AI development partner who understands both the technical complexity and the business context - someone who can tell you when AI is the right answer and how to implement it without creating expensive technical debt.",
        "whyChoosePoints": why_points,
        "services": services,
        "industries": industries,
        "trends": trends,
        "processSteps": process_steps,
        "whyToadster": "",
        "faqs": faqs,
        "ctaTitle": "Ready to Build AI That Actually Works?",
        "ctaBody": "Talk to our team about your use case. No generic pitch decks - just an honest conversation about what AI can do for your business, what it will cost, and how long it will take.",
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
        ("usa", "USA", DOWNLOADS / "toadster-ai-development-company-usa.md"),
        ("uk", "UK", DOWNLOADS / "toadster-ai-development-company-uk.md"),
        ("canada", "Canada", DOWNLOADS / "toadster-ai-development-company-canada.md"),
        ("india", "India", DOWNLOADS / "toadster-ai-development-company-india-v2.md"),
    ]

    all_keys = []
    for key, label, path in docx_sources:
        data = parse_docx_country(docx_text(path), label)
        data["key"] = key
        write_ts(key, data)
        all_keys.append(key)

    for key, label, path in md_sources:
        data = parse_md_country(path, label)
        if key == "usa":
            data["country"] = "USA"
            data["heroTitle"] = "AI Development Company in the USA"
        if key == "uk":
            data["country"] = "UK"
            data["heroTitle"] = "AI Development Company in the UK"
        data["key"] = key
        write_ts(key, data)
        all_keys.append(key)

    sg_html = (DOWNLOADS / "Toadster-singapore-ai-landing.html").read_text(encoding="utf-8")
    sg = parse_singapore_html(sg_html)
    write_ts("singapore", sg)
    all_keys.append("singapore")

    md_city_sources = [
        ("sydney", "Sydney", "australia", DOWNLOADS / "toadster-ai-development-company-sydney.md"),
        ("vancouver", "Vancouver", "canada", DOWNLOADS / "toadster-ai-development-company-vancouver.md"),
        ("london", "London", "uk", DOWNLOADS / "toadster-ai-development-company-london.md"),
        ("seattle", "Seattle", "usa", DOWNLOADS / "toadster-ai-development-company-seattle.md"),
        ("bangalore", "Bangalore", "india", DOWNLOADS / "toadster-ai-development-company-bangalore.md"),
        ("riyadh", "Riyadh", "saudi-arabia", DOWNLOADS / "toadster-ai-development-company-riyadh.md"),
        ("frankfurt", "Frankfurt", "germany", DOWNLOADS / "toadster-ai-development-company-frankfurt.md"),
        ("munich", "Munich", "germany", DOWNLOADS / "toadster-ai-development-company-munich.md"),
        ("berlin", "Berlin", "germany", DOWNLOADS / "toadster-ai-development-company-berlin.md"),
        ("los-angeles", "Los Angeles", "usa", DOWNLOADS / "toadsters-ai-development-company-los-angeles.md"),
        ("san-diego", "San Diego", "usa", DOWNLOADS / "toadsters-ai-development-company-san-diego.md"),
        ("perth", "Perth", "australia", DOWNLOADS / "toadsters-ai-development-company-perth.md"),
    ]
    docx_city_sources = [
        ("toronto", "Toronto", "canada", DOWNLOADS / "AI-Development-Company-Toronto.docx"),
        ("manchester", "Manchester", "uk", DOWNLOADS / "AI-Development-Company-Manchester.docx"),
        ("new-york", "New York", "usa", DOWNLOADS / "AI-Development-Company-New-York.docx"),
        ("hyderabad", "Hyderabad", "india", DOWNLOADS / "toadster-hyderabad-ai-landing.docx"),
        ("mumbai", "Mumbai", "india", DOWNLOADS / "AI-Development-Company-Mumbai.docx"),
        ("delhi", "Delhi", "india", DOWNLOADS / "toadster-delhi-ai-landing.docx"),
        ("montreal", "Montreal", "canada", DOWNLOADS / "AI-Development-Company-Montreal.docx"),
        ("melbourne", "Melbourne", "australia", DOWNLOADS / "AI-Development-Company-Melbourne.docx"),
        ("dubai", "Dubai", "uae", DOWNLOADS / "AI-Development-Company-Dubai.docx"),
        ("abu-dhabi", "Abu Dhabi", "uae", DOWNLOADS / "AI-Development-Company-Abu-Dhabi.docx"),
        ("jeddah", "Jeddah", "saudi-arabia", DOWNLOADS / "toadster-jeddah-ai-landing.docx"),
        ("noida", "Noida", "india", DOWNLOADS / "AI-Development-Company-Noida.docx"),
        ("chicago", "Chicago", "usa", DOWNLOADS / "AI-Development-Company-Chicago.docx"),
        ("san-francisco", "San Francisco", "usa", DOWNLOADS / "AI-Development-Company-San-Francisco.docx"),
        ("brisbane", "Brisbane", "australia", DOWNLOADS / "toadsters-brisbane-ai-landing.docx"),
    ]

    city_keys: list[str] = []
    city_parents: dict[str, str] = {}
    for key, label, parent, path in md_city_sources:
        if not path.exists():
            print(f"Skip missing city source: {path}")
            continue
        data = parse_md_city(path, label, parent)
        data["key"] = key
        write_city_ts(key, data)
        city_keys.append(key)
        city_parents[key] = parent

    for key, label, parent, path in docx_city_sources:
        if not path.exists():
            print(f"Skip missing city source: {path}")
            continue
        data = parse_docx_city(path, label, parent)
        data["key"] = key
        write_city_ts(key, data)
        city_keys.append(key)
        city_parents[key] = parent

    if city_keys:
        write_city_registry(city_keys, city_parents)

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

export const GLOBAL_COUNTRY_FLAGS: Record<string, string> = {{
  germany: "🇩🇪",
  uae: "🇦🇪",
  "saudi-arabia": "🇸🇦",
  australia: "🇦🇺",
  usa: "🇺🇸",
  uk: "🇬🇧",
  canada: "🇨🇦",
  india: "🇮🇳",
  singapore: "🇸🇬",
}}

export const GLOBAL_COUNTRY_NAV_ORDER: string[] = [
  "india",
  "usa",
  "uae",
  "saudi-arabia",
  "germany",
  "australia",
  "uk",
  "canada",
  "singapore",
]

export const GLOBAL_COUNTRY_NAV_LABELS: Record<string, string> = {{
  india: "IN",
  usa: "USA",
  uae: "UAE",
  "saudi-arabia": "SA",
  germany: "DE",
  australia: "AU",
  uk: "UK",
  canada: "CA",
  singapore: "SG",
}}

export const GLOBAL_COUNTRY_NAV = GLOBAL_COUNTRY_NAV_ORDER
  .filter((key) => GLOBAL_COUNTRY_PAGES[key])
  .map((key) => {{
    const page = GLOBAL_COUNTRY_PAGES[key]
    return {{
      key: page.key,
      label: GLOBAL_COUNTRY_NAV_LABELS[key] ?? page.country,
      href: page.slug,
      description: page.metaDescription,
      flag: GLOBAL_COUNTRY_FLAGS[page.key] ?? "🌐",
    }}
  }})
""",
        encoding="utf-8",
    )
    print(f"Wrote {registry}")


if __name__ == "__main__":
    main()
