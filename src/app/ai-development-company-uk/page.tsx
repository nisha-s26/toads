import { GlobalCountryPage } from "@/views/global-pages/GlobalCountryPage"
import { UK_PAGE } from "@/views/global-pages/data/uk"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/ai-development-company-uk")
export const dynamic = "force-static"

export default function Page() {
  return <GlobalCountryPage data={UK_PAGE} />
}
