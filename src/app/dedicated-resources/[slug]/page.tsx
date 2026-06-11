import DedicatedResourceDetail from "@/views/dedicated-resources/DedicatedResourceDetail"
import { DEDICATED_RESOURCE_SLUGS } from "@/config/dedicated-resources"
import { createStaticMetadata } from "@/lib/next-metadata"
import type { Metadata } from "next"

export const dynamic = "force-static"

export function generateStaticParams() {
  return DEDICATED_RESOURCE_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  return createStaticMetadata(`/dedicated-resources/${slug}`)
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <DedicatedResourceDetail slug={slug} />
}
