import PageComponent from "@/views/services/ai-chatbots"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/services/ai-chatbots")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
