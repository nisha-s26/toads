import PageComponent from "@/views/services/ar-vr-development"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/services/ar-vr-development")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
