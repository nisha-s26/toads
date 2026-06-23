import { GlobalCountryPage } from "@/views/global-pages/GlobalCountryPage"
import { CANADA_PAGE } from "@/views/global-pages/data/canada"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/ai-development-company-canada")
export const dynamic = "force-static"

export default function Page() {
  return <GlobalCountryPage data={CANADA_PAGE} />
}
