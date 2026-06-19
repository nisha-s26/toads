"use client"

import TrustedBy from "@/views/homepage/TrustedBy"

type LazyTrustedByProps = {
  compact?: boolean
  onDarkBackground?: boolean
}

export function LazyTrustedBy(props: LazyTrustedByProps) {
  return <TrustedBy {...props} />
}
