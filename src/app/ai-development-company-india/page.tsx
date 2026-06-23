import { GlobalCountryPage } from "@/views/global-pages/GlobalCountryPage"
import { INDIA_PAGE } from "@/views/global-pages/data/india"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/ai-development-company-india")
export const dynamic = "force-static"

export default function Page() {
  return <GlobalCountryPage data={INDIA_PAGE} />
}
