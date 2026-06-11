import PageComponent from "@/views/services/agentic-ai"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/services/agentic-ai")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
