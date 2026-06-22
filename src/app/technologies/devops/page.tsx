import PageComponent from "@/views/technologies/devops"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/technologies/devops")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
