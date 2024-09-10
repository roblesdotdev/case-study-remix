import { type PlatformProxy } from 'wrangler'

type Cloudflare = Omit<PlatformProxy<Env>, 'dispose'>
type LoadContext = {
  cloudflare: Cloudflare
}

declare module '@remix-run/cloudflare' {
  interface AppLoadContext {
    env: Cloudflare['env']
    cf: Cloudflare['cf']
    ctx: Cloudflare['ctx']
  }
}

export function getLoadContext({
  context,
}: {
  request: Request
  context: LoadContext
}) {
  return {
    env: context.cloudflare.env,
    cf: context.cloudflare.cf,
    ctx: context.cloudflare.ctx,
  }
}
