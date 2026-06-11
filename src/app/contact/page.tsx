import PageComponent from "@/views/contact"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/contact")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
