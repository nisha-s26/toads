import PageComponent from "@/views/services/saas-app-development"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/services/saas-app-development")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
