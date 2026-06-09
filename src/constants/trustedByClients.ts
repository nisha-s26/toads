export interface TrustedByClient {
  label: string
  src?: string
}

export const TRUSTED_BY_CLIENTS: TrustedByClient[] = [
  { label: "Paytm", src: "/trusted-by/paytm.webp" },
  { label: "FireAI", src: "/trusted-by/fireai.webp" },
  { label: "Noise" },
  { label: "MyChallan" },
  { label: "Axis Bank", src: "/trusted-by/axis.webp" },
  { label: "Reliance" },
  { label: "Tawuniya", src: "/trusted-by/tawuniya.webp" },
  { label: "H&M", src: "/trusted-by/hm.webp" },
  { label: "Google", src: "/trusted-by/google.webp" },
]
