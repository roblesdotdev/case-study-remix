import { useRouteLoaderData } from '@remix-run/react'
import { type loader as rootLoader } from '~/root'

/**
 * @returns the request info from the root loader
 */
export function useRequestInfo() {
  const data = useRouteLoaderData<typeof rootLoader>('root')
  if (!data?.requestInfo) {
    throw new Error('No request info found in root loader')
  }
  return data.requestInfo
}
