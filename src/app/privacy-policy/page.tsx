import PageComponent from "@/views/legal/privacy-policy"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/privacy-policy")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
