import PageComponent from "@/views/services/iot-development"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/services/iot-development")
export const dynamic = "force-static"

export default function Page() {
  return <PageComponent />
}
