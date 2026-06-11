import PageComponent from "@/views/services/llm-development"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/services/llm-development")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
