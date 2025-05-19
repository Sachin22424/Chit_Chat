# 💬 Chit Chat Website

Chit Chat is a **real-time online chat application** built with modern web technologies to enable seamless communication between users.

---

## 🚀 Features

- **Real-Time Messaging**: Instant message delivery using Socket.IO.
- **User Authentication**: Secure login and signup functionality.
- **Responsive UI**: Built with React and Vite for a fast, modern frontend.
- **Persistent Storage**: MongoDB for storing user data and messages.
- **Scalable Backend**: Node.js and Express for robust server-side logic.

---

## 🧠 Tech Stack

| **Layer**            | **Technology**           |
|-----------------------|--------------------------|
| **Database**          | MongoDB                 |
| **Backend**           | Node.js + Express       |
| **Frontend**          | React + Vite            |
| **Real-Time Engine**  | Socket.IO               |

---

## 📁 Folder Structure

```
ChitChat
├── client_frontend    # React + Vite frontend
├── server_backend     # Node.js + Express backend
└── soket              # Socket.IO real-time server
```

### 📁 client_frontend - React Frontend
- **Built with**: React + Vite
- **Styling**: CSS & Styled Components
- **Key Files & Folders**:
  - `src/App.jsx`: Sets up routing and renders application pages.
  - `src/components/`: Reusable components (e.g., ChatBox, Message, Notification).
  - `src/pages/`: Main pages (e.g., Login, Signup, Chat).

### 📁 server_backend - Express Backend
- **Built with**: Node.js, Express.js, Mongoose
- **Development Tool**: Nodemon for hot reload
- **Key Files & Folders**:
  - `index.js`: Entry point; connects to MongoDB and sets up the Express app.
  - `routes/`:
    - `auth.js`: Handles login/signup routes.
    - `messages.js`: Handles chat message routes.
  - `models/`:
    - `User.js`: Mongoose schema for users.
    - `Message.js`: Mongoose schema for messages.

### 📁 soket - Socket.IO Server
- **Built with**: Node.js, Socket.IO
- **Key Files**:
  - `index.js`: Main server file, sets up Socket.IO listeners.
  - `events.js`: Custom events for message send/receive handling.

---

## ✅ Prerequisites

Ensure the following are installed on your system:
- Node.js
- npm
- MongoDB

---

## 📦 Installation & Running Locally

Follow these steps to set up and run the project on your machine:

### 1. Clone the Repository
```bash
git clone https://github.com/Sachin22424/Chit_Chat
cd ChitChat
```

### 2. Set Up the Frontend (React + Vite)
```bash
cd client_frontend
npm install
npm run dev
```

### 3. Set Up the Backend (Express + MongoDB)
In a new terminal window/tab:
```bash
cd server_backend
npm install
nodemon
```

### 4. Set Up the Socket Server (Socket.IO)
In another terminal window/tab:
```bash
cd soket
npm install
nodemon
```

---

## 🌐 Real-Time Communication

Socket.IO powers real-time, bidirectional, event-based communication, ensuring instant message delivery and live chat updates between users.

---
