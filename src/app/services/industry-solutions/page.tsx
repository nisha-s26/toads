import PageComponent from "@/views/services/industry-solutions"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/services/industry-solutions")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
