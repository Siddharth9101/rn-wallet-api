import express from 'express'
import dotenv from 'dotenv'
import rateLimiter from './middleware/rateLimiter.js'
import transactionsRoutes from './routes/transactions.routes.js'
import { initDB } from './config/db.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 5001

app.use(rateLimiter)
app.use(express.json())

app.get('/', (req, res) => res.send('its working.'))

app.use('/api/transactions', transactionsRoutes)

initDB().then(() =>
  app.listen(port, () =>
    console.log(`Server is up and runnning on PORT:${port}`)
  )
)
