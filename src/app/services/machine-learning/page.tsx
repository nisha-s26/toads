import PageComponent from "@/views/services/machine-learning"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/services/machine-learning")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
