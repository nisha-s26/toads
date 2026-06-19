import PageComponent from "@/views/technologies/iot"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/technologies/iot")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
