import PageComponent from "@/views/services/cybersecurity"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/services/cybersecurity")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
