import PageComponent from "@/views/technologies/artificial-intelligence"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/technologies/artificial-intelligence")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
