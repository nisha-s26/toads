import PageComponent from "@/views/services/conversational-ai"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/services/conversational-ai")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
