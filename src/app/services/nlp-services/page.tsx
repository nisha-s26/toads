import PageComponent from "@/views/services/nlp-services"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/services/nlp-services")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
