import PageComponent from "@/views/services/vr-development"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/services/vr-development")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
