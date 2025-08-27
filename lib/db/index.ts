import { Pool } from 'pg'
import * as schema from './schema'

import * as dotenv from 'dotenv'
import { drizzle as drizzleNode } from 'drizzle-orm/node-postgres'

dotenv.config({ path: '.env' })

export const db = drizzleNode(
  new Pool({ connectionString: process.env.POSTGRES_URL }),
  {
    schema
  }
)
