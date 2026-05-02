# Velora API Documentation

This document outlines the available API endpoints for the Velora Backend.

## Base URL
- Local: `http://localhost:5000`
- Production: `https://<your-render-app>.onrender.com`

---

## 1. Authentication
All auth routes are under `/api/auth`.

### POST `/signup`
Register a new user with email and password.
- **Body**:
  ```json
  {
    "fullName": "John Doe",
    "email": "john@example.com",
    "password": "securepassword",
    "mobile": "9876543210",
    "familySize": "3 - 4"
  }
  ```
- **Response**: `201 Created` with JWT token and user info.

### POST `/login`
Login with email and password.
- **Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "securepassword"
  }
  ```
- **Response**: `200 OK` with JWT token.

### POST `/google/signup`
Register via Google OAuth.
- **Body**: `{ "token": "GOOGLE_ACCESS_TOKEN" }`
- **Response**: `201 Created` with JWT token.

### POST `/google/login`
Login via Google OAuth.
- **Body**: `{ "token": "GOOGLE_ACCESS_TOKEN" }`
- **Response**: `200 OK` with JWT token.

---

## 2. Transactions (Planned)
Requires `Authorization: Bearer <token>`

### GET `/api/transactions`
Get all transactions for the authenticated user.

### POST `/api/transactions`
Create a new transaction.
- **Body**: `{ "title": String, "amount": Number, "category": String, "type": "income" | "expense" }`

---

## 3. Deployment (Render.com)
The project is configured for Render via `render.yaml`.
- **Build Command**: `npm install`
- **Start Command**: `node server.js`
- **Environment Variables required**: `MONGO_URI`, `JWT_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`.
