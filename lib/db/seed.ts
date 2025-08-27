import fs from 'fs/promises'
import path from 'path'
import { db } from '.'
import { settings } from './schema'

async function runSeed() {
  console.log('⏳ Running seed...')

  const start = Date.now()

  const filePath = path.resolve('./init-prompt.txt')
  const fileContent = await fs.readFile(filePath, 'utf-8')

  await db.insert(settings).values({ prompt: fileContent }).execute()

  const end = Date.now()

  console.log(`✅ Seed completed in ${end - start}ms`)

  process.exit(0)
}

runSeed().catch(err => {
  console.error('❌ Seed failed')
  console.error(err)
  process.exit(1)
})
