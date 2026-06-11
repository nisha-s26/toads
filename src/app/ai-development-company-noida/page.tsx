import PageComponent from "@/views/country/Noida"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/ai-development-company-noida")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
