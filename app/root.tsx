import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from '@remix-run/cloudflare'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react'
import '~/styles/global.css'
import { ThemeSwitch, useTheme } from './routes/resources+/theme-switch'
import { useNonce } from './utils/nonce-provider'
import { getTheme } from './utils/theme.server'
import { ClientHintCheck, getHints } from '~/utils/client-hints'

export async function loader({ request }: LoaderFunctionArgs) {
  return json({
    requestInfo: {
      hints: getHints(request),
      theme: getTheme(request),
    },
  })
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Tinogasta | Demo' },
    {
      name: 'description',
      content:
        'Case study for an unofficial website for the city of Tinogasta.',
    },
  ]
}

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useLoaderData<typeof loader>()
  const nonce = useNonce()
  const theme = useTheme()
  return (
    <html lang="en" className={theme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content={theme} />
        <ClientHintCheck nonce={nonce} />
        <Meta />
        <Links />
      </head>
      <body>
        <header className="flex items-center justify-center py-8">
          <ThemeSwitch userPreference={data.requestInfo.theme} />
        </header>
        <main>{children}</main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
