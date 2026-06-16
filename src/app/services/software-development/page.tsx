import PageComponent from "@/views/services/software-development"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/services/software-development")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
