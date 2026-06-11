export const DEDICATED_RESOURCE_SLUGS = [
  "ai-ml-engineers",
  "llm-application-developers",
  "agentic-ai-engineers",
  "data-engineers",
  "mlops-engineers",
  "backend-developers",
  "qa-evaluation-engineers",
] as const

export type DedicatedResourceSlug = (typeof DEDICATED_RESOURCE_SLUGS)[number]
