import PageComponent from "@/views/services/penetration-testing"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/services/penetration-testing")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
