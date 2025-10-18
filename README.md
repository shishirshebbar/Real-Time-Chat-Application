# Real-Time Chat Application

## About the Project

This project is a full-stack real-time chat application built using the MERN stack with **Socket.io** for live communication. It allows users to register, log in, and exchange instant messages in real time. The backend handles authentication, sessions, and message storage; the frontend provides a responsive, interactive chat interface.

## Features

- Real-time messaging with Socket.io  
- User authentication with JWT  
- Secure password storage using bcrypt  
- Persistent chat history with MongoDB  
- Responsive UI with Tailwind CSS & DaisyUI  
- State management with Zustand  
- Toast notifications with React Hot Toast  

## Tech Stack

### Backend
- Node.js, Express
- MongoDB & Mongoose
- Socket.io
- jsonwebtoken (JWT)
- bcryptjs
- dotenv
- cookie-parser
- Nodemon (dev)

### Frontend
- React (Vite)
- Tailwind CSS & DaisyUI
- React Router DOM
- Socket.io Client
- Zustand
- React Hot Toast

## Clone the repository

Open a terminal and run:

```bash
git clone https://github.com/shishirshebbar/Real-Time-Chat-Application.git

```

## Run Instructions

### 1. Backend Setup

From the project root (backend):

```bash
# install dependencies
npm install

# create a .env file in the backend root with values like:
# PORT=5000
# MONGO_URI=your_mongodb_connection_uri
# JWT_SECRET=your_secret_key
# NODE_ENV=development

# start the backend (use npm run dev if you have nodemon configured)
npm start
```

The backend will typically run on http://localhost:5000 (or the PORT you set).

### 2. Frontend Setup

From the project root:

```bash
cd frontend
npm install
npm run dev
```

Vite's dev server commonly runs at http://localhost:5173 (check the console output).

## Notes

- Ensure your MongoDB connection string is correct in the .env file.
- If you use different folder names (e.g., client, server), adjust the cd commands accordingly.
- Use `npm run dev` for development if your package.json uses nodemon or concurrently for hot-reload.