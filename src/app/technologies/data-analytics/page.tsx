import PageComponent from "@/views/technologies/data-analytics"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/technologies/data-analytics")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
