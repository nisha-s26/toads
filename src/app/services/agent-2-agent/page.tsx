import PageComponent from "@/views/services/agent-2-agent"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/services/agent-2-agent")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
