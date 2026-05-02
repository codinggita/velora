# 📋 Velora API Documentation

Welcome to the **Velora Backend API**. This documentation provides everything you need to integrate with our financial management services.

## 🚀 Base URL
- **Development**: `http://localhost:5000`
- **Production**: `https://velora-backend.onrender.com` (Example)

---

## 🔐 Authentication
Velora uses **JWT (JSON Web Tokens)** for secure authentication.

### 1. Register User (Email/Password)
`POST /api/auth/signup`

Registers a new user and returns a token.

**Request Body:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123",
  "mobile": "9876543210",
  "familySize": "3 - 4"
}
```

**Success Response:**
- **Code**: `201 Created`
- **Content**:
  ```json
  {
    "token": "eyJhbGciOiJIUzI1...",
    "user": {
      "id": "64f1...",
      "fullName": "John Doe",
      "email": "john@example.com"
    }
  }
  ```

---

### 2. Login User (Email/Password)
`POST /api/auth/login`

Authenticates a user and returns a token.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Success Response:**
- **Code**: `200 OK`
- **Content**: `{ "token": "...", "user": { ... } }`

---

### 3. Google OAuth Signup
`POST /api/auth/google/signup`

Creates a new account using a Google Access Token.

**Request Body:**
```json
{
  "token": "GOCSPX-..."
}
```

---

### 4. Google OAuth Login
`POST /api/auth/google/login`

Logs into an existing account using a Google Access Token.

---

## 💸 Transactions (Planned)
`GET /api/transactions`
- **Headers**: `Authorization: Bearer <token>`
- **Description**: Fetches all transactions for the logged-in user.

---

## 🛠️ Deployment Configuration
The project is set up for **Render.com** via the `render.yaml` file.

### Required Environment Variables:
| Variable | Description |
| :--- | :--- |
| `PORT` | 5000 (Default) |
| `MONGO_URI` | Your MongoDB Atlas connection string |
| `JWT_SECRET` | Secret key for signing tokens |
| `GOOGLE_CLIENT_ID` | Your Google Cloud project ID |

---

## ⚠️ Error Codes
| Status | Meaning |
| :--- | :--- |
| `400` | Bad Request (Missing fields or invalid data) |
| `401` | Unauthorized (Missing or invalid token) |
| `404` | Not Found |
| `500` | Internal Server Error |
