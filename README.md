# SkillSwap 🤝

SkillSwap is a MERN stack web application that allows users to share, learn, and exchange skills with others. Users can add their skills, request skills from others, and collaborate through a simple and intuitive interface.

------------------------------------------------------------------------------------------------------------------------------------------

## ⚡ How It Works

1. Users **register or login** to access the platform.
2. Users can **add their skills** and **browse skills** offered by others.
3. Users can **send skill requests** to others; the receiver can **accept or reject** the request.
4. Once a request is accepted, users can **chat one-to-one** to coordinate learning/exchange.
5. **Protected routes** ensure only authenticated users can access certain features.
6. All data (users, skills, requests, messages) is stored in **MongoDB**, handled via **Express.js APIs**, and consumed in the **React frontend**.

------------------------------------------------------------------------------------------------------------------------------------------

## 🚀 Features

## Features

1. **User Authentication**  
   - Register and login functionality.
   - Passwords securely hashed.
   - Protected routes for authenticated users only.

2. **Skill Management**  
   - Users can add, edit, or delete their skills.
   - Browse all skills offered by other users.

3. **Skill Requests**  
   - Send requests to other users to learn their skills.
   - Request receiver can accept or reject requests.

4. **Chat System**  
   - One-to-one chat after a request is accepted.
   - Real-time messaging (optional: using Socket.io).

5. **Data Storage**  
   - MongoDB stores users, skills, requests, and messages.
   - Express.js APIs handle CRUD operations.
   - React.js frontend consumes APIs.

6. **Protected Routes**  
   - Only logged-in users can access certain pages like adding skills, sending requests, and chatting.



--------------------------------------------------------------------------------------------------------------------------------------------

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Axios
- CSS 

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

### Deployment
- Frontend: Netlify
- Backend: Render
- Database: MongoDB Atlas

-----------------------------------------------------------------------------------------------------------------------------------------------

## 📂 Project Structure

```text
SKILLSWAP_COPY/
├── backend/
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Skill.js
│   │   ├── Request.js
│   │   └── Message.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── skillRoutes.js
│   │   ├── requestRoutes.js
│   │   └── messageRoutes.js
│   │
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   ├── build/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── About.js
│   │   │   ├── ChatBox.js
│   │   │   ├── Explore.js
│   │   │   ├── Home.js
│   │   │   ├── Learning.js
│   │   │   ├── Login.js
│   │   │   ├── MySkills.js
│   │   │   ├── ReceivedRequests.js
│   │   │   ├── Register.js
│   │   │   └── SentRequests.js
│   │   │
│   │   ├── styles/
│   │   ├── utils/
│   │   │   └── api.js
│   │   │
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── reportWebVitals.js
│   │   └── setUpTests.js
│   │
│   └── package.json
│
├── README.md
└── .gitignore


```
------------------------------------------------------------------------------------------------------------------------------------

# ⚙️ Installation & Setup

### Backend
```bash
cd backend
npm install
npm run dev
```
Create a .env file in the backend folder:

```
.env
Copy code
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret
PORT=5000

```
Frontend
```bash
Copy code
cd frontend
npm install
npm start

```

The application will run on:

Frontend: http://localhost:3000

Backend: http://localhost:5000


----------------------------------------------------------------------------------------------------------------

# 📸 Screenshots

### Home Page 
![Home Page](screenshots/home.png)

### Register Page
![Register](screenshots/register.png)

### Login Page
![Login](screenshots/login.png)

### Home Page (After Login)
![Home Page](screenshots/home.png)

### Add Skill
![Add Skill](screenshots/add-skill.png)

### Browse Skills
![Browse Skills](screenshots/browse-skills.png)

