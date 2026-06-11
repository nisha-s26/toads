import PageComponent from "@/views/services/ai-data-analytics"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/services/ai-data-analytics")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
