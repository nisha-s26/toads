import PageComponent from "@/views/services/ai-consultation"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/services/ai-consultation")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
