# SkillSwap 🌐

### *A community-driven skill-sharing platform for collaborative learning*

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React.js-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Backend-Node.js-3C873A?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Database-MongoDB-4DB33D?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Auth-JWT-black?style=for-the-badge&logo=jsonwebtokens" />
</p>

---

## 📌 Overview

**SkillSwap** is a **full-stack web application** that enables users to **share skills, learn new skills, and collaborate with mentors or learners in real time**.
Users can offer skills, request learning sessions, or chat with mentors — promoting **inclusivity, continuous learning, and community growth**.

---

## ✨ Features

- 🔐 **Secure JWT-based authentication**  
- 👤 **Skills Section to add, update, and manage your skills**  
- 🔎 **Explore section to discover skills offered by others**  
- 💬 **Real-time chat between mentors and learners**  
- 📱 **Responsive design across devices**  
- 🌍 **Community-driven collaborative learning**
---

## 🎯 Project Objectives

* Develop an interactive, secure skill-sharing platform
* Provide personalized dashboards for learners & mentors
* Enable real-time collaboration and communication
* Support **technical skills** (web dev, programming, DS)
* Support **life skills** (leadership, communication, teamwork)
* Encourage **lifelong learning & inclusivity**

---

## 🛠️ Tech Stack

| Layer              | Technology          |
| ------------------ | ------------------- |
| **Frontend**       | React.js, Bootstrap |
| **Backend**        | Node.js, Express.js |
| **Database**       | MongoDB             |
| **Authentication** | JWT                 |
| **Tools**          | VS Code, Postman    |

---

## 📂 Project Structure

```

skillswap/
│
├── backend/                     # Server-side code
│   ├── server.js                # Main backend entry point
│   ├── routes/                  # API route handlers
│   │   ├── authRoutes.js        # User authentication (register/login with JWT)
│   │   ├── skillRoutes.js       # CRUD operations for skills
│   │   ├── requestRoutes.js     # Handling skill requests
│   │   └── messageRoutes.js     # Chat and messaging
│   ├── models/                  # MongoDB schema definitions
│   │   └── User.js              # User model
│   ├── config/                  # Environment & DB connection
│   └── package.json             # Backend dependencies
│
├── frontend/                    # Client-side React application
│   ├── public/                  # Static assets
│   └── src/                     # React.js source code
│       ├── components/          # Reusable UI components
│       │   ├── Navbar.js
│       │   ├── Footer.js
│       │   └── ChatBox.js
│       ├── pages/               # Pages mentioned in report
│       │   ├── Home.js          # Welcome page with username
│       │   ├── About.js         # Purpose & vision of SkillSwap
│       │   ├── Login.js         # Secure login
│       │   ├── Register.js      # User registration
│       │   ├── MySkills.js      # Manage personal skills
│       │   ├── Explore.js       # Browse skills shared by others
│       │   └── Learning.js      # Track enrolled skills & progress
│       ├── App.js               # Root React component
│       ├── index.js             # React entry point
│       └── package.json         # Frontend dependencies
│
├── .env                         # Environment variables (MONGO_URI, JWT_SECRET)
├── README.md                    # Project documentation
└── package.json                 # Root dependencies

```
---

## 🚀 Getting Started

### **Prerequisites**

* Node.js & npm
* MongoDB (local or cloud)
* VS Code or any IDE

---

### **Installation**

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/skillswap.git
   cd skillswap
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file:

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. **Run the backend**

   ```bash
   npm run server
   ```

5. **Run the frontend**

   ```bash
   npm start
   ```

---

## 📸 Screenshots (Preview)

* **Login Page**  
  A secure login interface where users enter their credentials to access the platform.
    
  <img width="1006" height="451" alt="image" src="https://github.com/user-attachments/assets/674e4b40-00d1-4d24-b119-76e6b33cb383" />


* **Personalized Home Page**  
  After login, users are welcomed with a personalized greeting and an overview of the platform’s purpose.
  
  <img width="1009" height="474" alt="image" src="https://github.com/user-attachments/assets/bdfc0b0e-8c5a-4b3a-8283-323e1094ce02" />


* **My Skills Dashboard**  
  A dedicated section where users can add, update, or delete their own skills, keeping track of their learning journey.
  
  <img width="1023" height="453" alt="image" src="https://github.com/user-attachments/assets/32676494-df70-4ae5-bd3b-57083cabc1a9" />


* **Explore Skills Section**  
  This section allows users to browse skills shared by others, view details, and send requests to learn.
   
  <img width="1042" height="485" alt="image" src="https://github.com/user-attachments/assets/e0a560fd-85c0-4519-8e22-ad46a6e0b39b" />
  
  <img width="1038" height="509" alt="image" src="https://github.com/user-attachments/assets/3bc2ca5e-537b-4917-8375-9344bc4e93d1" />


* **Learning Section / Requests & Chat Interface**  
  Displays sent and received requests for skill learning. Once accepted, users can interact via real-time chat.
   
  <img width="1051" height="536" alt="image" src="https://github.com/user-attachments/assets/dcfe45de-3994-441f-ab78-2d2b2d210a75" />


  **Instructor Side:**  
  Shows how mentors accept requests and manage sessions with learners.
  
  <img width="1072" height="513" alt="image" src="https://github.com/user-attachments/assets/6d3b7fc2-c00b-4595-964e-44198602d37b" />


  **Learner Side:**  
  Displays the learner’s view of accepted requests and the chat interface for collaboration.
  
  <img width="1061" height="494" alt="image" src="https://github.com/user-attachments/assets/6a25b827-f33f-4443-8abb-3328c2c12121" />


---
## 🌍 Contribution to SDGs

| SDG                                       | Contribution                                     |
| ----------------------------------------- | ------------------------------------------------ |
| **SDG 4 – Quality Education**             | Democratizes access to learning                  |
| **SDG 8 – Decent Work & Economic Growth** | Enhances employability through skill development |
| **SDG 10 – Reduced Inequalities**         | Encourages inclusive and accessible learning     |

---

## 📈 Future Enhancements

* Skill certifications & progress tracker
* Online workshops / mentorship programs
* Digital portfolios & badges
* Community learning groups and forums
* Profile page with Settings

---

## 👩‍💻 Contributors

* M. Aasritha
* M. Poojitha
* K. Pravallika
* Md. Aayesha Farheen
* K. Yasawini

Guided by **Dr. K. Jyothsna Devi**
*Assistant Professor, Department of CSE*

---

## 🔗 Useful Resources

* 🌐 **Live Website:** [https://skill-swap-project.netlify.app/](https://skill-swap-project.netlify.app/)
1. MongoDB Documentation – https://www.mongodb.com/docs/ 
2. Express.js Documentation – https://expressjs.com/ 
3. React.js Documentation – https://reactjs.org/ 
4. Node.js Documentation – https://nodejs.org/ 
5. Bootstrap – https://getbootstrap.com/ 
6. Postman – https://www.postman.com/

---

## 📜 License

This project was developed as part of **Project-Based Learning (PBL)** at
**Prasad V Potluri Siddhartha Institute of Technology, Vijayawada**.

---
