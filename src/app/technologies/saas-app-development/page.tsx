import PageComponent from "@/views/technologies/saas-app-development"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/technologies/saas-app-development")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
