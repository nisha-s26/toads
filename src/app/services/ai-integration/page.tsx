import PageComponent from "@/views/services/ai-integration"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/services/ai-integration")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
