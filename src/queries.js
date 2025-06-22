import { sql } from './config/db.js'

export const CREATE_TRANSACTION_TABLE_QUERY =
  () => sql`CREATE TABLE IF NOT EXISTS transactions(
id SERIAL PRIMARY KEY,
user_id VARCHAR(255) NOT NULL,
title VARCHAR(255) NOT NULL,
amount DECIMAL(10,2) NOT NULL,
category VARCHAR(255) NOT NULL,
created_at DATE NOT NULL DEFAULT CURRENT_DATE
)`

export const CREATE_TRANSACTION_QUERY = (title, user_id, category, amount) =>
  sql`INSERT INTO transactions(user_id, title, category, amount) VALUES (${user_id}, ${title}, ${category}, ${amount}) RETURNING *`

export const GET_TRANSACTIONS_BY_ID_QUERY = userId => sql`
SELECT * FROM transactions WHERE user_id = ${userId} ORDER BY created_at DESC
`
export const DELETE_TRANSACTION_BY_ID_QUERY = id => sql`
DELETE FROM transactions WHERE id = ${id} RETURNING *
`
export const GET_BALANCE_BY_USER_ID_QUERY = userId => sql`
SELECT COALESCE(SUM(amount),0) as balance FROM transactions WHERE user_id = ${userId}
`
export const GET_INCOME_BY_ID_QUERY = userId => sql`
SELECT COALESCE(SUM(amount),0) as income FROM transactions WHERE user_id = ${userId} AND amount > 0
`

export const GET_EXPENSES_BY_ID_QUERY = userId => sql`
SELECT COALESCE(SUM(amount),0) as expenses FROM transactions WHERE user_id = ${userId} AND amount < 0
`
