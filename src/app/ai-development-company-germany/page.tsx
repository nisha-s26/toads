import { GlobalCountryPage } from "@/views/global-pages/GlobalCountryPage"
import { GERMANY_PAGE } from "@/views/global-pages/data/germany"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/ai-development-company-germany")
export const dynamic = "force-static"

export default function Page() {
  return <GlobalCountryPage data={GERMANY_PAGE} />
}
