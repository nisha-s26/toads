import PageComponent from "@/views/country/Uae"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/ai-development-company-uae")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
