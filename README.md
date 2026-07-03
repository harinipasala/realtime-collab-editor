# Real-Time Collaboration Editor

## Overview

Real-Time Collaboration Editor is a MERN Stack application that allows multiple users to edit text simultaneously. The project uses Socket.IO for real-time communication and JWT authentication for secure access.

## Features

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- MongoDB Atlas Database
- Real-Time Text Synchronization
- Socket.IO Integration
- React Frontend
- Express Backend

## Tech Stack

### Frontend
- React.js
- Axios
- React Router DOM
- Socket.IO Client

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (JSON Web Token)
- bcryptjs
- Socket.IO

## Project Structure

```
realtime-collab-editor
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│
├── frontend
│   ├── src
│   ├── public
│   ├── App.jsx
│   └── main.jsx
│
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/harinipasala/realtime-collab-editor.git
cd realtime-collab-editor
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## API Endpoints

### Register User

```http
POST /api/auth/register
```

### Login User

```http
POST /api/auth/login
```

### Protected Profile Route

```http
GET /api/profile
```

## Authentication Flow

1. User registers with name, email, and password.
2. Password is encrypted using bcrypt.
3. User logs in.
4. JWT token is generated.
5. Protected routes verify JWT token before granting access.

## Real-Time Collaboration Flow

1. User opens editor.
2. Socket.IO establishes connection.
3. Changes are emitted using `send-changes`.
4. Other connected clients receive updates through `receive-changes`.
5. Text remains synchronized across users.

## Future Enhancements

- Document Saving
- Collaboration Rooms
- Online Users List
- Monaco Code Editor
- Syntax Highlighting
- Shareable Document Links

## Author

**Pasala Harini**

B.Tech Computer Science Engineering

GitHub: https://github.com/harinipasala
