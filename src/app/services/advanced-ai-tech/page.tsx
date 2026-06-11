import PageComponent from "@/views/services/advanced-ai-tech"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/services/advanced-ai-tech")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
