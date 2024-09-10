import { Link } from '@remix-run/react'
import Advice from '~/components/advice'
import { GeneralErrorBoundary } from '~/components/error-boundary'
import { Icon } from '~/components/ui/icon'

export default function Index() {
  return (
    <div className="container pt-8">
      <Advice />
      <div className="mt-4 space-y-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl">Descubre nuestra ciudad</h1>
          <p className="text-fg-muted/80">
            Encuentra eventos, servicios y experiencias locales en un solo
            lugar, fácil y rápido.
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
              placeholder="¿Qué estás buscando?"
              className="h-12 w-full bg-panel pl-10 pr-4 outline-none ring-primary ring-offset-2 ring-offset-canvas placeholder:text-fg-muted/50 focus:ring-2"
            />
          </div>
          <button className="inline-flex h-12 w-full items-center justify-center gap-1 bg-primary px-6 text-sm font-medium text-on-primary sm:w-auto">
            Buscar
          </button>
        </div>
        <div className="space-y-6">
          <div className="space-y-1">
            <Link
              to="/"
              className="inline-flex items-center gap-2"
              prefetch="intent"
            >
              Encuentra donde alojarte{' '}
              <Icon name="arrow-right" className="size-4" />
            </Link>
            <p className="mb-1 text-fg-muted/80">
              Busca hoteles, cabañas y hospedajes locales para tu próxima
              estadía.
            </p>
          </div>
          <div className="space-y-1">
            <Link
              to="/"
              className="inline-flex items-center gap-2"
              prefetch="intent"
            >
              Descubre lo mejor de la gastronomia local
              <Icon name="arrow-right" className="size-4" />
            </Link>
            <p className="mb-1 text-fg-muted/80">
              Explora restaurantes, cafeterías y bares para cada ocasión.
            </p>
          </div>
          <div className="space-y-1">
            <Link
              to="/"
              className="inline-flex items-center gap-2"
              prefetch="intent"
            >
              Descubre los próximos eventos
              <Icon name="arrow-right" className="size-4" />
            </Link>
            <p className="mb-1 text-fg-muted/80">
              No te pierdas las actividades que están sucediendo cerca de ti.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ErrorBoundary() {
  return <GeneralErrorBoundary />
}
