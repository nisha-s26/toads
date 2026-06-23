import { GlobalCountryPage } from "@/views/global-pages/GlobalCountryPage"
import { USA_PAGE } from "@/views/global-pages/data/usa"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/ai-development-company-usa")
export const dynamic = "force-static"

export default function Page() {
  return <GlobalCountryPage data={USA_PAGE} />
}
