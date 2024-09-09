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
import { Footer } from './components/footer'
import { GlobalLoading } from './components/global-loading'
import { Header } from './components/header'
import { iconsHref } from './components/ui/icon'
import { useTheme } from './routes/resources+/theme-switch'
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
      <body className="flex flex-col">
        <GlobalLoading />
        <Header theme={data.requestInfo.theme} />
        <main className="flex-1">{children}</main>
        <Footer />
        <img
          src={iconsHref}
          alt=""
          hidden
          // this img tag simply forces the icons to be loaded at a higher
          // priority than the scripts (chrome only for now)
          // @ts-expect-error -- silly React pretending this attribute doesn't exist
          fetchpriority="high"
        />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
