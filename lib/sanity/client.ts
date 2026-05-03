import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
// Fall back to a valid placeholder so createClient doesn't throw during build
// when the env var is missing. Real fetches will fail at runtime until the
// env var is set, but the build itself will succeed.
const safeProjectId =
  projectId && /^[a-z0-9-]+$/.test(projectId) ? projectId : 'placeholder-id'

export const sanityClient = createClient({
  projectId: safeProjectId,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
})
