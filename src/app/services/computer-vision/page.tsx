import PageComponent from "@/views/services/computer-vision"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/services/computer-vision")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
