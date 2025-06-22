import { Router } from 'express'
import {
  createTransaction,
  deleteTransactionById,
  getSummaryByUserId,
  getTransactionsByUserId,
} from '../controllers/transactions.controllers.js'

const router = Router()

router.get('/:userId', getTransactionsByUserId)

router.post('/', createTransaction)

router.delete('/:id', deleteTransactionById)

router.get('/summary/:userId', getSummaryByUserId)

export default router
