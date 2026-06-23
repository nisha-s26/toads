import PageComponent from "@/views/services/hub"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/services")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
