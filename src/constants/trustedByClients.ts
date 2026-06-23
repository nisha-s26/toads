export interface TrustedByClient {
  label: string
  src?: string
  /** Optional visual scale tweak so padded logo files fill the cell evenly */
  scale?: number
}

export const TRUSTED_BY_CLIENTS: TrustedByClient[] = [
  { label: "Paytm", src: "/trusted-by/paytm.webp", scale: 0.6 },
  { label: "FireAI", src: "/trusted-by/fireai.webp", scale: 0.8 },
  { label: "Noise", src: "/trusted-by/noise.png", scale: 0.8 },
  { label: "Axis Bank", src: "/trusted-by/axis.webp", scale: 0.8 },
  { label: "Pizza Hut", src: "/trusted-by/pizzahut.png", scale: 3.5 },
  { label: "Prudential", src: "/trusted-by/prudential.png", scale: 1.8 },
  { label: "Reliance", src: "/trusted-by/reliance.png", scale: 2.3 },
  // { label: "Tawuniya", src: "/trusted-by/tawuniya.webp", scale: 0.8 },
  { label: "H&M", src: "/trusted-by/hm.webp", scale: 0.7 },
  { label: "Google", src: "/trusted-by/google.webp", scale: 0.8 },
]
