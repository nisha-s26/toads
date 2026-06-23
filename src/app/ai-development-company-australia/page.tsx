import { GlobalCountryPage } from "@/views/global-pages/GlobalCountryPage"
import { AUSTRALIA_PAGE } from "@/views/global-pages/data/australia"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/ai-development-company-australia")
export const dynamic = "force-static"

export default function Page() {
  return <GlobalCountryPage data={AUSTRALIA_PAGE} />
}
