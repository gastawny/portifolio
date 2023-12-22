'use client'

import useSWR, { SWRConfiguration } from 'swr'

export function useSWRData<T>(url: string, options: SWRConfiguration<T> = {}) {
  return useSWR<T, Error>(url, fetcher<T>, { ...options })
}

async function fetcher<T>(url: string): Promise<T> {
  const res = await fetch(url, { cache: 'no-store' })
  if (!res.ok) {
    throw new Error(res.statusText)
  }
  return await res.json()
}
