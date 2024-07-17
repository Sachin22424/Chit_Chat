Chit Chat Website:
                                                                                  
Chit Chat is a real-time online chat application built using MongoDB for data storage, JavaScript for the backend, React with Vite for the frontend, and Socket.IO for real-time communication.

Folder Structure:

ChitChat
├── client_frontend
├── server_backend
└── soket

Prerequisites

Make sure you have the following installed on your machine:

1.  Node.js
2.  npm (Node Package Manager)
3.  MongoDB

Installation
Follow these steps to set up and run the project locally.

1. Clone the Repository:
   
      git clone https://github.com/yourusername/ChitChat.git
      cd ChitChat

2. Set Up Client Frontend

        cd client_frontend
        npm install
        npm run dev
   
3. Set Up Server Backend
   
Open a new terminal window or tab:

      cd server_backend
      nodemon

4. Set Up Socket Server
   
Open another new terminal window or tab:

      cd soket
      nodemon


Technologies Used

  Database: MongoDB
  Backend: JavaScript
  Frontend: React + Vite
  Real-time Communication: Socket.IO


Explanation of Code for Chit Chat Website:

Folder Structure

The project is organized into three main directories:

client_frontend: Contains the React application code.
server_backend: Contains the backend API code.
soket: Contains the Socket.IO server code for real-time communication.
Client Frontend
The frontend is built using React and Vite, providing a fast development environment and a performant build.

Key Files
src/App.jsx: The main component that sets up routing and renders different pages of the application.
src/components: Contains reusable React components such as ChatBox, Message, Notification, etc.
src/pages: Contains main pages like Login, Chat, and Signup.
Setup
Vite is used for faster builds and a smoother development experience.
CSS and Styled Components are used for styling the application.
Server Backend
The backend is built using JavaScript and Express.js to handle API requests and interact with the MongoDB database.

Key Files
index.js: The main entry point of the backend server. Sets up Express.js and connects to MongoDB.
routes: Contains route definitions for handling different API endpoints.
auth.js: Handles authentication-related routes like login and signup.
messages.js: Handles routes for sending and retrieving messages.
models: Contains Mongoose schemas and models for MongoDB.
User.js: Defines the user schema.
Message.js: Defines the message schema.
Setup
Express.js is used to set up the server and handle routes.
Mongoose is used to interact with MongoDB.
Nodemon is used for automatic server restarts during development.
Socket Server
The Socket.IO server handles real-time communication between clients.

Key Files
index.js: The main entry point of the Socket.IO server. Sets up Socket.IO and listens for connection events.
events.js: Defines custom events for Socket.IO like message sending and receiving.
Setup
Socket.IO is used to enable real-time, bi-directional communication between clients and the server.
   
