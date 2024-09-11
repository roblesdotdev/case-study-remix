import { Link } from '@remix-run/react'
import Advice from '~/components/advice'
import { GeneralErrorBoundary } from '~/components/error-boundary'
import { Icon } from '~/components/ui/icon'

export default function Index() {
  return (
    <div className="container pt-8">
      <Advice />
      <div className="mt-4 space-y-4">
        <div className="flex flex-col gap-1">
          <p className="text-fg-muted/80">
            Find your notes in one place place, fast and easy.
          </p>
        </div>
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
          <div className="relative flex-grow">
            <Icon
              className="absolute left-3 top-1/2 size-5 -translate-y-1/2 transform text-fg-muted/50"
              name="magnifying-glass"
            />
            <input
              type="text"
              placeholder="What are you looking for?"
              className="h-12 w-full bg-panel pl-10 pr-4 outline-none ring-primary ring-offset-2 ring-offset-canvas placeholder:text-fg-muted/50 focus:ring-2"
            />
          </div>
          <button className="inline-flex h-12 w-full items-center justify-center gap-1 bg-primary px-6 text-sm font-medium text-on-primary sm:w-auto">
            Buscar
          </button>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-2">
        {Array.from({ length: 3 }, (_, idx) => (
          <Link to="/" key={idx} className="group">
            <div className="flex flex-col gap-2 border p-4 group-hover:bg-panel/50">
              <h1 className="font-medium">
                This is the note title...let's se how it works!
              </h1>
              <p className="text-sm text-fg-muted/80">
                by <span className="text-fg-muted">roblesdotdev</span>
              </p>
            </div>
          </Link>
        ))}
        <div className="py-4">
          <Link
            className="inline-flex items-center gap-1 text-sm text-fg-muted/80 hover:text-fg-muted"
            to="/"
          >
            View more
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export function ErrorBoundary() {
  return <GeneralErrorBoundary />
}
