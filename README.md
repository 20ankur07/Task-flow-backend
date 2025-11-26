# Task Flow Backend (Node.js + Express + MongoDB)

This is the backend API for the **Task Flow** project.  
It provides secure authentication, task CRUD APIs, and user profile features.

---

## 🚀 Live API URL

https://task-flow-backend-dfo6.onrender.com

---

## 📦 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt.js (password hashing)
- CORS
- Render (Deployment)

---

## ✨ Features

- User Registration
- User Login (JWT-based)
- Password hashing with bcrypt
- Protected routes using JWT middleware
- CRUD operations for tasks
- User profile routes
- MongoDB integration with Mongoose

---

## 🔐 Authentication Flow

1. User registers → hashed password stored in DB  
2. User logs in → backend returns a JWT token  
3. Frontend stores token in localStorage  
4. Protected routes require sending token in headers:  

## ▶️ Run Locally

Install dependencies:
npm install

Start server:
npm start

Server runs at:
http://localhost:4000

🛡 Security Practices Implemented

Hashed passwords using bcrypt (salt rounds = 10)
Encrypted JWT tokens
Protected routes with middleware
CORS configured for frontend domain
Environment secrets stored securely

🚀 Deployment Notes

Hosted on Render as a web service
Uses dynamic outbound IP, so MongoDB IP whitelist set to 0.0.0.0/0
Automatic deployments from GitHub commits

📈 Scaling Strategy

The backend is structured to scale in production:
Modular route organization
Stateless JWT fits horizontal scaling
MongoDB Atlas supports:
Replica sets
Auto-scaling
Sharding (if needed)
Can be containerized with Docker for Kubernetes
Reverse proxy (NGINX) can be used for load balancing
Rate limiting & caching (Redis) can be added later

👨‍💻 Author
Ankur Giri
ankurgiri76555@gmail.com
