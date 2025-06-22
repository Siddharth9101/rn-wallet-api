import express from 'express'
import dotenv from 'dotenv'
import rateLimiter from './middleware/rateLimiter.js'
import transactionsRoutes from './routes/transactions.routes.js'
import { initDB } from './config/db.js'
import job from './config/cron.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 5001

if (process.env.NODE_ENV === 'production') job.start()

app.use(rateLimiter)
app.use(express.json())

app.get('/api/health', (req, res) => res.status(200).json({ status: 'ok' }))

app.use('/api/transactions', transactionsRoutes)

app.use((req, res, next) => {
  res.status(404).json({
    message: 'Route not found',
  })
})

initDB().then(() =>
  app.listen(port, () =>
    console.log(`Server is up and runnning on PORT:${port}`)
  )
)
