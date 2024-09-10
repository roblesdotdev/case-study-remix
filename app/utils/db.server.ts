import { createClient } from '@libsql/client'
import { drizzle } from 'drizzle-orm/libsql'
import { singleton } from '~/utils/singleton.server'

export function buildDb(env: Env) {
  return singleton('db', () => {
    const client = createClient({
      url: env.TURSO_DATABASE_URL,
      authToken: env.TURSO_AUTH_TOKEN,
    })

    return drizzle(client)
  })
}
