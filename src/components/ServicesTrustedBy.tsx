import { TRUSTED_BY_CLIENTS } from "@/constants/trustedByClients"
import { cn } from "@/lib/utils"

interface ServicesTrustedByProps {
  variant?: "default" | "dark"
}

export function ServicesTrustedBy({ variant = "default" }: ServicesTrustedByProps) {
  const items = [...TRUSTED_BY_CLIENTS, ...TRUSTED_BY_CLIENTS]

  return (
    <section
      className={cn(
        "py-10 overflow-hidden border-y border-page-border bg-white",
        // variant === "dark" ? "bg-[#070e1e]" : "bg-page-bg-alt dark:bg-[#070e1e]",
      )}
    >
      <p className="text-xl tracking-[0.35em] text-toadster-green font-bold text-center mb-5 uppercase">
        Trusted by Innovative Teams Worldwide
      </p>

      <div className="relative overflow-hidden">
        <div
          className={cn(
            "pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r to-transparent",
            // variant === "dark" ? "from-[#070e1e]" : "from-page-bg-alt dark:from-[#070e1e]",
          )}
        />
        <div
          className={cn(
            "pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l to-transparent",
            // variant === "dark" ? "from-[#070e1e]" : "from-page-bg-alt dark:from-[#070e1e]",
          )}
        />

        <div className="flex animate-marquee items-center gap-14 whitespace-nowrap px-4">
          {items.map((client, i) => (
            <div
              key={`${client.label}-${i}`}
              className="flex h-10 shrink-0 min-w-[120px] items-center justify-center"
            >
              {client.src ? (
                <img
                  src={client.src}
                  alt={client.label}
                  className="h-8 w-auto max-w-[140px] object-contain"
                />
              ) : (
                <span className="text-sm font-semibold text-black">
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
