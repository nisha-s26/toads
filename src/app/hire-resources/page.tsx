import PageComponent from "@/views/hire-resources"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/hire-resources")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
