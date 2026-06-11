import PageComponent from "@/views/services/custom-ai-solutions"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/services/custom-ai-solutions")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
