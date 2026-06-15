"use client"

import Image from "next/image"
import { TRUSTED_BY_CLIENTS } from "@/constants/trustedByClients"

const LOGO_HEIGHT_CLASS =
  "h-7 w-auto shrink-0 sm:h-8 md:h-9 [@media(max-height:720px)]:h-6 [@media(max-height:720px)]:sm:h-7"

export function ServicesTrustedBy() {
  const items = [...TRUSTED_BY_CLIENTS, ...TRUSTED_BY_CLIENTS]

  return (
    <section className="py-2 overflow-hidden">
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)] py-3">
        <div className="flex animate-marquee items-center gap-16 whitespace-nowrap px-4 md:gap-20">
          {items.map((client, i) => (
            <div
              key={`${client.label}-${i}`}
              className="flex shrink-0 min-w-[120px] items-center justify-center"
            >
              {client.src ? (
                <Image
                  src={client.src}
                  alt={client.label}
                  width={120}
                  height={48}
                  draggable={false}
                  className={`${LOGO_HEIGHT_CLASS} block max-w-[140px] object-contain brightness-0 opacity-70 transition-opacity duration-200 hover:opacity-100 dark:invert`}
                />
              ) : (
                <span className="text-sm font-semibold text-page-fg opacity-70 transition-opacity duration-200 hover:opacity-100">
                  {client.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
