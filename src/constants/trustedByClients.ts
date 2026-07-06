export interface TrustedByClient {
  label: string
  src?: string
  /** Optional visual scale tweak so padded logo files fill the cell evenly */
  scale?: number
}

export const TRUSTED_BY_CLIENTS: TrustedByClient[] = [
  { label: "Paytm", src: "/trusted-by/paytm.webp", scale: 0.9 },
  { label: "FireAI", src: "/trusted-by/fireai.webp", scale: 1 },
  { label: "Noise", src: "/trusted-by/noise.webp", scale: 1 },
  { label: "Axis Bank", src: "/trusted-by/axis.webp", scale: 1 },
  { label: "Pizza Hut", src: "/trusted-by/pizzahut.webp", scale: 3.8 },
  { label: "Prudential", src: "/trusted-by/prudential.webp", scale: 2.6 },
  { label: "Reliance", src: "/trusted-by/reliance.webp", scale: 2.6 },
  // { label: "Tawuniya", src: "/trusted-by/tawuniya.webp", scale: 0.8 },
  { label: "H&M", src: "/trusted-by/hm.webp", scale: 0.9 },
  { label: "Google", src: "/trusted-by/google.webp", scale: 0.9 },
]
