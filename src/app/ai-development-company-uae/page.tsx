import { GlobalCountryPage } from "@/views/global-pages/GlobalCountryPage"
import { UAE_PAGE } from "@/views/global-pages/data/uae"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/ai-development-company-uae")
export const dynamic = "force-static"

export default function Page() {
  return <GlobalCountryPage data={UAE_PAGE} />
}
