interface CountrySectionCardProps {
  title: string
  paragraphs: string[]
  image: string
  imageAlt: string
  index?: number
}

export function CountrySectionCard({
  title,
  paragraphs,
  image,
  imageAlt,
  index = 0,
}: CountrySectionCardProps) {
  const imageFirst = index % 2 === 0

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-page-border bg-white/10 shadow-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-toadster-green/35 hover:shadow-lg dark:shadow-[0_8px_32px_-12px_rgba(0,0,0,0.7)] sm:flex-row">
      <div
        className={`relative h-44 shrink-0 overflow-hidden sm:h-auto sm:w-[38%] ${
          imageFirst ? "sm:order-1" : "sm:order-2"
        }`}
      >
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-br from-[#0a1f12]/50 via-transparent to-[#2ECC71]/10" />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent sm:bg-linear-to-r sm:from-black/30 sm:to-transparent" />
      </div>

      <div
        className={`relative flex flex-1 flex-col p-5 md:p-6 ${
          imageFirst ? "sm:order-2" : "sm:order-1"
        }`}
      >
        <h2 className="text-lg font-bold text-page-fg transition-colors duration-300 group-hover:text-toadster-green md:text-xl">
          {title}
        </h2>
        <div className="mt-3 space-y-2.5 text-sm leading-relaxed text-page-fg-subtle md:text-[15px]">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-auto pt-4">
          <div className="h-0.5 w-0 rounded-full bg-linear-to-r from-[#006600] to-[#2ECC71] transition-all duration-500 group-hover:w-full" />
        </div>
      </div>
    </article>
  )
}
