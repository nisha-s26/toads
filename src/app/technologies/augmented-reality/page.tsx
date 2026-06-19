import PageComponent from "@/views/technologies/augmented-reality"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/technologies/augmented-reality")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
