import { type LoaderFunctionArgs, json } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'
import { entries } from 'drizzle/schema'
import { count } from 'drizzle-orm'
import { GeneralErrorBoundary } from '~/components/error-boundary'
import { Icon } from '~/components/ui/icon'
import { buildDb } from '~/utils/db.server'

export async function loader({ context }: LoaderFunctionArgs) {
  const db = buildDb(context.env)
  const result = await db.select({ count: count() }).from(entries)
  return json({
    total: result[0].count,
  })
}

export default function Index() {
  const data = useLoaderData<typeof loader>()

  return (
    <div className="flex flex-col items-center justify-center gap-2 py-12">
      <h1 className="text-2xl font-medium">Working</h1>
      <p className="text-lg text-fg-muted">This is a description</p>

      <div className="mt-4 flex items-center gap-3">
        <button className="inline-flex h-12 items-center justify-center gap-1 bg-primary px-4 text-sm font-medium text-on-primary">
          Get started
          <Icon name="arrow-right" className="h-4 w-4" />
        </button>
        <button className="inline-flex h-12 items-center justify-center border-2 bg-transparent px-4 text-sm font-medium">
          Get started
        </button>
      </div>

      <div className="pt-8">
        <p>Total entries: {data.total}</p>
      </div>

      <div className="mt-10 flex flex-col items-center gap-2">
        <input
          type="text"
          placeholder="Enter your email"
          className="h-12 w-96 bg-panel px-4 outline-none ring-primary ring-offset-2 ring-offset-canvas placeholder:text-fg-muted/75 focus:ring-2"
        />
      </div>
    </div>
  )
}

export function ErrorBoundary() {
  return <GeneralErrorBoundary />
}
