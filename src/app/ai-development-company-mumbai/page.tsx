import PageComponent from "@/views/country/Mumbai"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/ai-development-company-mumbai")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
