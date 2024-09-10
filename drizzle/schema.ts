import { createId } from '@paralleldrive/cuid2'
import { sql } from 'drizzle-orm'
import { text, sqliteTable, integer } from 'drizzle-orm/sqlite-core'

export const entries = sqliteTable('entry', {
  id: text('id')
    .primaryKey()
    .notNull()
    .$defaultFn(() => createId()),
  title: text('title').notNull(),
  description: text('description').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`(CURRENT_TIMESTAMP)`),
  updatedAt: integer('updated_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`(CURRENT_TIMESTAMP)`)
    .$onUpdate(() => new Date()),
})
