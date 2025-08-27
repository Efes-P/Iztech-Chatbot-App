import { pgTable, text } from 'drizzle-orm/pg-core'

export const settings = pgTable('settings', {
  prompt: text('prompt')
})
export type Setting = typeof settings.$inferSelect
