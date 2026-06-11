import PageComponent from "@/views/country/India"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/ai-development-company-india")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
