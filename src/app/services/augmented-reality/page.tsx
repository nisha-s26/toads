import PageComponent from "@/views/services/augmented-reality"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/services/augmented-reality")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
