import PageComponent from "@/views/careers"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/careers")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
