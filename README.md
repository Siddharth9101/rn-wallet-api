# SpendWise – Backend API (Node.js + Express)

This is the backend API for **SpendWise**, a mobile expense tracker app. It handles user authentication, transaction creation, and data fetching.

## 🔧 Features

- 🔐 User Registration & Login (Clerk)
- 💸 Create income/expense transactions
- 📊 Fetch total balance, income, and expenses
- 🗂️ Categorized transaction listing

## 🛠️ Tech Stack

- **Backend Framework:** Express.js
- **Database:** PostgreSQL
- **Authentication:** Clerk
- **Deployment:** Render

## 🗃️ API Endpoints

| Method | Endpoint                            | Description                       |
|--------|-------------------------------------|-----------------------------------|
| GET    | `/api/health`                       | Health Check                      |
| GET    | `/api/transactions/userId`          | Fetch user's transactions         |
| GET    | `/api/transactions/summary/userId`  | Get total summary                 |
| POST   | `/api/transactions/`                | Create income/expense transaction |
| DELETE | `/api/transactions/id`              | Delete transaction by it's id     |

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Siddharth9101/rn-wallet-api.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create .env file
```bash
PORT=5001
DATABASE_URL=your_postgres_url
UPSTASH_REDIS_REST_URL=your_redis_rest_url
UPSTASH_REDIS_REST_TOKEN=your_redis_rest_token
```

### 4. Run the server
```bash
npm run dev
```
