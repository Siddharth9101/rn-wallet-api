import {
  CREATE_TRANSACTION_QUERY,
  DELETE_TRANSACTION_BY_ID_QUERY,
  GET_BALANCE_BY_USER_ID_QUERY,
  GET_EXPENSES_BY_ID_QUERY,
  GET_INCOME_BY_ID_QUERY,
  GET_TRANSACTIONS_BY_ID_QUERY,
} from '../queries.js'

export const getTransactionsByUserId = async (req, res) => {
  try {
    const { userId } = req.params

    const transactions = await GET_TRANSACTIONS_BY_ID_QUERY(userId)

    res.status(200).json(transactions)
  } catch (error) {
    console.log('Error getting the transactions', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

export const createTransaction = async (req, res) => {
  try {
    const { title, amount, category, user_id } = req.body

    if (!title || !category || !user_id || amount === undefined) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    const transaction = await CREATE_TRANSACTION_QUERY(
      title,
      user_id,
      category,
      amount
    )

    res.status(201).json(transaction[0])
  } catch (error) {
    console.log('Error creating the transaction', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

export const deleteTransactionById = async (req, res) => {
  try {
    const { id } = req.params

    if (isNaN(parseInt(id))) {
      return res.status(400).json({ message: 'Invalid transaction id' })
    }

    const result = await DELETE_TRANSACTION_BY_ID_QUERY(id)

    if (result.length === 0) {
      return res.status(404).json({ message: 'Transaction not found' })
    }

    res.status(200).json({ message: 'Transaction deleted successfully' })
  } catch (error) {
    console.log('Error deleting the transaction', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

export const getSummaryByUserId = async (req, res) => {
  try {
    const { userId } = req.params

    const balanceResult = await GET_BALANCE_BY_USER_ID_QUERY(userId)

    const incomeResult = await GET_INCOME_BY_ID_QUERY(userId)

    const expenseResult = await GET_EXPENSES_BY_ID_QUERY(userId)

    res.status(200).json({
      balance: balanceResult[0].balance,
      income: incomeResult[0].income,
      expenses: expenseResult[0].expenses,
    })
  } catch (error) {
    console.log('Error getting the summary', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
