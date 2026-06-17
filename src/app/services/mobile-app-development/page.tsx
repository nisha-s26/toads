import PageComponent from "@/views/services/mobile-app-development"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/services/mobile-app-development")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
