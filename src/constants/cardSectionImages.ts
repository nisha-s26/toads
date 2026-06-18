/** High-quality tech imagery for card split layouts (Unsplash + Pexels, 1200px). */
export type CardSectionImageSet = {
  rightBatch: string
  leftBatch: string
  rightBatchAlt: string
  leftBatchAlt: string
}

export const DEFAULT_CARD_SECTION_IMAGES: CardSectionImageSet = {
  rightBatch:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=90",
  leftBatch:
    "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
  rightBatchAlt: "Software development and engineering",
  leftBatchAlt: "Technology infrastructure and digital systems",
}

export const HOMEPAGE_CARD_SECTION_IMAGES: CardSectionImageSet = {
  rightBatch:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=90",
  leftBatch:
    "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
  rightBatchAlt: "Artificial intelligence and machine learning",
  leftBatchAlt: "Neural networks and data science",
}

export const ABOUT_CARD_SECTION_IMAGES: CardSectionImageSet = {
  rightBatch:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=90",
  leftBatch:
    "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
  rightBatchAlt: "Collaborative technology team",
  leftBatchAlt: "Innovation and digital transformation",
}

/** Service-specific relatable imagery keyed by route slug */
export const SERVICE_CARD_SECTION_IMAGES: Record<string, CardSectionImageSet> = {
  "penetration-testing": {
    rightBatch:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=90",
    leftBatch:
      "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1200",
    rightBatchAlt: "Cybersecurity and vulnerability assessment",
    leftBatchAlt: "Network penetration testing and security audit",
  },
  "web-development": {
    rightBatch:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=90",
    leftBatch:
      "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200",
    rightBatchAlt: "Web development and front-end engineering",
    leftBatchAlt: "Responsive website design and coding",
  },
  "saas-app-development": {
    rightBatch:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=90",
    leftBatch:
      "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200",
    rightBatchAlt: "SaaS product analytics dashboard",
    leftBatchAlt: "Cloud SaaS application development",
  },
  "software-development": {
    rightBatch:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=90",
    leftBatch:
      "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1200",
    rightBatchAlt: "Custom software development",
    leftBatchAlt: "Enterprise application engineering",
  },
  "mobile-app-development": {
    rightBatch:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=90",
    leftBatch:
      "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1200",
    rightBatchAlt: "Mobile app development on smartphone",
    leftBatchAlt: "iOS and Android application design",
  },
  "ai-development": {
    rightBatch:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=90",
    leftBatch:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
    rightBatchAlt: "AI and machine learning development",
    leftBatchAlt: "Robotics and intelligent automation",
  },
  "vr-development": {
    rightBatch:
      "https://images.unsplash.com/photo-1622979135225-d2fe269b5ac0?auto=format&fit=crop&w=1200&q=90",
    leftBatch:
      "https://images.pexels.com/photos/8384132/pexels-photo-8384132.jpeg?auto=compress&cs=tinysrgb&w=1200",
    rightBatchAlt: "Virtual and augmented reality experience",
    leftBatchAlt: "Immersive VR headset technology",
  },
  devops: {
    rightBatch:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=90",
    leftBatch:
      "https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1200",
    rightBatchAlt: "Cloud infrastructure and DevOps pipelines",
    leftBatchAlt: "Server monitoring and CI/CD automation",
  },
  "iot-development": {
    rightBatch:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=90",
    leftBatch:
      "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1200",
    rightBatchAlt: "IoT hardware and embedded systems",
    leftBatchAlt: "Connected smart devices and sensors",
  },
  "product-management": {
    rightBatch:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=90",
    leftBatch:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
    rightBatchAlt: "Product strategy and team collaboration",
    leftBatchAlt: "Product roadmap planning workshop",
  },
  "rag-development": {
    rightBatch:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=90",
    leftBatch:
      "https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=1200",
    rightBatchAlt: "LLM and retrieval-augmented generation systems",
    leftBatchAlt: "AI knowledge base and document intelligence",
  },
}

export function getCardSectionImages(pathname: string | null | undefined): CardSectionImageSet {
  if (!pathname) return DEFAULT_CARD_SECTION_IMAGES

  if (pathname === "/about") return ABOUT_CARD_SECTION_IMAGES
  if (pathname === "/") return HOMEPAGE_CARD_SECTION_IMAGES

  const serviceSlug = pathname.match(/\/services\/([^/]+)/)?.[1]
  if (serviceSlug && SERVICE_CARD_SECTION_IMAGES[serviceSlug]) {
    return SERVICE_CARD_SECTION_IMAGES[serviceSlug]
  }

  return DEFAULT_CARD_SECTION_IMAGES
}

/** @deprecated Use getCardSectionImages() — kept for backwards compatibility */
export const CARD_SECTION_IMAGES = DEFAULT_CARD_SECTION_IMAGES
