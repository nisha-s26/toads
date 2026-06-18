import PageComponent from "@/views/services/application-support-and-maintenance"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/services/application-support-and-maintenance")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
