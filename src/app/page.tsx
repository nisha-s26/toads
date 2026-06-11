import HomePage from "@/views/homepage"
import { createStaticMetadata } from "@/lib/next-metadata"

export const metadata = createStaticMetadata("/")
export const dynamic = "force-static"

export default function Page() {
  return <HomePage />
}
