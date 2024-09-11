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
} from '@remix-run/react'
import '~/styles/global.css'
import { Footer } from './components/footer'
import { GlobalLoading } from './components/global-loading'
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
    { title: 'Case Study | Remix + Cloudflare' },
    {
      name: 'description',
      content: 'Case study with remix and cloudflare by Aldo r. Robles.',
    },
  ]
}

export function Layout({ children }: { children: React.ReactNode }) {
  const nonce = useNonce()
  const theme = useTheme()
  const forceDark = true
  return (
    <html lang="en" className={forceDark ? 'dark' : theme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content={forceDark ? 'dark' : theme} />
        <ClientHintCheck nonce={nonce} />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col">
        <GlobalLoading />
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
