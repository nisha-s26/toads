"use client"

import dynamic from "next/dynamic"

const TrustedBy = dynamic(() => import("@/views/homepage/TrustedBy"), {
  loading: () => <div className="section-full-bleed h-14 shrink-0" aria-hidden />,
})

type LazyTrustedByProps = {
  compact?: boolean
  onDarkBackground?: boolean
}

export function LazyTrustedBy(props: LazyTrustedByProps) {
  return <TrustedBy {...props} />
}
