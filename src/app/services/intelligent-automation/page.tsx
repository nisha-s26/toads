import PageComponent from "@/views/services/intelligent-automation"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/services/intelligent-automation")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
