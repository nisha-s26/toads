import PageComponent from "@/views/services/ai-automation"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/services/ai-automation")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
