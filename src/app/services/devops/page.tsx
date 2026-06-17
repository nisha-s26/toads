import PageComponent from "@/views/services/devops"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/services/devops")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
