import { GlobalCountryPage } from "@/views/global-pages/GlobalCountryPage"
import { SINGAPORE_PAGE } from "@/views/global-pages/data/singapore"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/ai-development-company-singapore")
export const dynamic = "force-static"

export default function Page() {
  return <GlobalCountryPage data={SINGAPORE_PAGE} />
}
