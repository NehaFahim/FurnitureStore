export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  "skz2w96XQweOxdPvoH0c5l8fJLRvm2PRh2BWqGXuf7SGdOpctXFnfs4pFuE6TpHZjwDoSMsV2wOKg9q48aWmCJZGMUKvYUWyjVg3VjjySu8M604GeGyy9lp07z2RKofHhMyB777UdQEZjPrd7QVBIh1OlYNiMu6uC6aoldhAte3Ar0HUygfc",
  'Missing environment variable: SANITY_API_TOKEN'
)
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
