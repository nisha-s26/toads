import PageComponent from "@/views/services/web-development"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/services/web-development")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
