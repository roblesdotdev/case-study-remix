import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from '@remix-run/dev'
import { remixDevTools } from 'remix-development-tools'
import { flatRoutes } from 'remix-flat-routes'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { getLoadContext } from './load-context'

export default defineConfig({
  build: {
    cssMinify: true,
    minify: true,
    assetsInlineLimit: (source: string) => {
      if (source.endsWith('sprite.svg') || source.endsWith('favicon.svg')) {
        return false
      }
    },
  },
  plugins: [
    remixDevTools(),
    remixCloudflareDevProxy({ getLoadContext }),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
      serverModuleFormat: 'esm',
      routes: async defineRoutes => {
        return flatRoutes('routes', defineRoutes, {
          ignoredRouteFiles: [
            '.*',
            '**/*.css',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__*.*',
            // This is for server-side utilities you want to colocate
            // next to your routes without making an additional
            // directory. If you need a route that includes "server" or
            // "client" in the filename, use the escape brackets like:
            // my-route.[server].tsx
            '**/*.server.*',
            '**/*.client.*',
          ],
        })
      },
    }),
    tsconfigPaths(),
  ],
})
