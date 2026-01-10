# SkillSwap 🤝

SkillSwap is a MERN stack web application that allows users to share, learn, and exchange skills with others. Users can add their skills, request skills from others, and collaborate through a simple and intuitive interface.

--------------------------------------------------------------------------------------------------------------------------------------------

## 🚀 Features

- 🔐 User Authentication (Login / Register)
- ➕ Add, Edit & Delete Skills
- 🔍 Browse Skills from Other Users
- 🤝 Skill Exchange Requests
- ✅ Accept / Reject Skill Requests
- 💬 One-to-One Chat after Request Acceptance
- 🛡️ Protected Routes using JWT
- 🌐 Responsive UI


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



