import { neon } from '@neondatabase/serverless'
import 'dotenv/config'
import { CREATE_TRANSACTION_TABLE_QUERY } from '../queries.js'

export const sql = neon(process.env.DATABASE_URL)

export const initDB = async () => {
  try {
    await CREATE_TRANSACTION_TABLE_QUERY()
    console.log('Database initialized successfully')
  } catch (error) {
    console.log('Error while creating transaction table. : ', error)
    process.exit(1)
  }
}
