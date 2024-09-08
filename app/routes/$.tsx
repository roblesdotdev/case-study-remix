import { GeneralErrorBoundary } from '~/components/error-boundary'

export function loader() {
  throw new Response('Not found', { status: 404, statusText: 'Not found page' })
}

export default function NotFoundRoute() {
  return <ErrorBoundary />
}

export function ErrorBoundary() {
  return <GeneralErrorBoundary />
}
