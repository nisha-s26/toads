import { GlobalCountryPage } from "@/views/global-pages/GlobalCountryPage"
import { SAUDI_ARABIA_PAGE } from "@/views/global-pages/data/saudi-arabia"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/ai-development-company-saudi-arabia")
export const dynamic = "force-static"

export default function Page() {
  return <GlobalCountryPage data={SAUDI_ARABIA_PAGE} />
}
