import PageComponent from "@/views/legal/terms-and-conditions"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/terms-and-conditions")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
