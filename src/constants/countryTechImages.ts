export const TECH_IMAGES = {
  aiNeural:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
  code:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  data:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  team:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
  cloud:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  circuit:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  automation:
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
  llm:
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
  fintech:
    "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
  server:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
  dubai:
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
  india:
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
  usa:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
  healthcare:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
  manufacturing:
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  logistics:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
} as const

export const COUNTRY_HERO_IMAGES: Record<string, string> = {
  germany: TECH_IMAGES.code,
  uae: TECH_IMAGES.dubai,
  "saudi-arabia": TECH_IMAGES.dubai,
  australia: TECH_IMAGES.cloud,
  usa: TECH_IMAGES.usa,
  uk: TECH_IMAGES.code,
  canada: TECH_IMAGES.cloud,
  india: TECH_IMAGES.india,
  singapore: TECH_IMAGES.fintech,
  // City monuments — verified Unsplash URLs
  sydney:
    "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80",
  vancouver:
    "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80",
  toronto:
    "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80",
  london:
    "https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=1200&q=80",
  manchester:
    "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=1200&q=80",
  "new-york":
    "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80",
  hyderabad:
    "https://images.unsplash.com/photo-1750834115164-8c2658f18dd0?auto=format&fit=crop&w=1200&q=80",
  seattle:
    "https://images.unsplash.com/photo-1587330979470-3595ac045ab0?auto=format&fit=crop&w=1200&q=80",
  bangalore:
    "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
  mumbai:
    "https://images.unsplash.com/photo-1768728584556-e97f86b51417?auto=format&fit=crop&w=1200&q=80",
  delhi:
    "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
  montreal:
    "https://images.unsplash.com/photo-1519178614-68673b201f36?auto=format&fit=crop&w=1200&q=80",
  melbourne:
    "https://images.unsplash.com/photo-1742643635715-00c577862b56?auto=format&fit=crop&w=1200&q=80",
  dubai: TECH_IMAGES.dubai,
  "abu-dhabi":
    "https://images.unsplash.com/photo-1749653652468-98a34f0be831?auto=format&fit=crop&w=1200&q=80",
  jeddah:
    "https://images.unsplash.com/photo-1699954669485-812988f5c2db?auto=format&fit=crop&w=1200&q=80",
  riyadh:
    "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=1200&q=80",
  frankfurt:
    "https://images.unsplash.com/photo-1648634032154-ad0ece188b47?auto=format&fit=crop&w=1200&q=80",
  munich:
    "https://images.unsplash.com/photo-1751039531516-caedbb85dfe0?auto=format&fit=crop&w=1200&q=80",
  berlin:
    "https://images.unsplash.com/photo-1747119421266-742889fcde8a?auto=format&fit=crop&w=1200&q=80",
}

export const CITY_CARD_IMAGES: Record<string, string> = {
  sydney: COUNTRY_HERO_IMAGES.sydney,
  vancouver: COUNTRY_HERO_IMAGES.vancouver,
  toronto: COUNTRY_HERO_IMAGES.toronto,
  london: COUNTRY_HERO_IMAGES.london,
  manchester: COUNTRY_HERO_IMAGES.manchester,
  "new-york": COUNTRY_HERO_IMAGES["new-york"],
  hyderabad: COUNTRY_HERO_IMAGES.hyderabad,
  seattle: COUNTRY_HERO_IMAGES.seattle,
  bangalore: COUNTRY_HERO_IMAGES.bangalore,
  mumbai: COUNTRY_HERO_IMAGES.mumbai,
  delhi: COUNTRY_HERO_IMAGES.delhi,
  montreal: COUNTRY_HERO_IMAGES.montreal,
  melbourne: COUNTRY_HERO_IMAGES.melbourne,
  dubai: COUNTRY_HERO_IMAGES.dubai,
  "abu-dhabi": COUNTRY_HERO_IMAGES["abu-dhabi"],
  jeddah: COUNTRY_HERO_IMAGES.jeddah,
  riyadh: COUNTRY_HERO_IMAGES.riyadh,
  frankfurt: COUNTRY_HERO_IMAGES.frankfurt,
  munich: COUNTRY_HERO_IMAGES.munich,
  berlin: COUNTRY_HERO_IMAGES.berlin,
}
