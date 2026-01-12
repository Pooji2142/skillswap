# SkillSwap Screenshots 📸

This section provides a visual walkthrough of the SkillSwap application, showing the complete user flow from authentication to skill exchange.

---

## Authentication

### Register Page
Users can create a new account by providing basic details such as name, email, and password.

![Register](register.png)

### Login Page
Registered users can log in using their email and password to access the platform.

![Login](login.png)

---

## Home Page

### Home (Before Login)
Public landing page displaying an overview of the platform and its purpose.

![Home Before Login](Home.png)

### Home (After Login)
Personalized home page showing available skills and navigation options after successful login.

![Home After Login](after_login_Home.png)

---

## About Page
Provides information about the SkillSwap platform and its purpose.

![About](about.png)

---
## Skill Management

### Add Skill – Form
Shows the skill creation form where the user enters the skill name, description, and proficiency level.

![Add Skill Form](add_skill_form.png)

### Add Skill – After Submission
Displays the updated skills list after successfully adding a new skill.

![Add Skill Success](after_adding_skill.png)

### My Skills
Displays all skills added by the logged-in user, with options to manage them.

![My Skills](My_skills.png)

### Edit Skill
Allows users to update the details of an existing skill such as name, description, or proficiency level.

![Edit Skill](update_skill.png)

### Delete Skill
Allows users to permanently remove a skill from their profile.

![Delete Skill](delete_skill.png)

### Explore Skills
Allows users to browse skills offered by other users on the platform.

![Explore Skills](explore_skills.png)

---

## Skill Requests

### Send Skill Request
Users can send a skill request to another user to initiate skill exchange.

![Send Request](send-request.png)

## Learning Dashboard

The Learning Dashboard is a centralized page where users can manage all skill exchange requests.  
It shows **sent requests**, **received requests**, and the **status of each request** (pending or accepted) on the same page.

### 📤 Sender View – Sent Requests
Shows the requests sent by the logged-in user along with their current status.

Example:
To user456 – Skill: React.js (Pending)

![Learning Dashboard – Sender](learning-dashboard-sender.png)

### 📥 Receiver View – Before Accepting
Shows the incoming request for **user456** before it is accepted.  
The user can see the request and has options to **Accept** or **Reject**.

Example:
From user123 – Skill: React.js (Pending)

![Learning Dashboard – Receiver Before Accepting](learning-dashboard-receiver-before.png)

---

### 📥 Receiver View – After Accepting
Shows the same request for **user456** after it has been accepted.  
The status now shows **Accepted**, and the user can proceed to chat or coordinate learning.

Example:
From user123 – Skill: React.js (Accepted)

![Learning Dashboard – Receiver After Accepting](learning-dashboard-receiver-after.png)
---

### 📤 Sender View – After Acceptance
Shows the sent request from **user123**’s perspective after **user456 accepted** it.  
The status now shows **Accepted**.

Example:
To user456 – Skill: React.js (Accepted)

![Learning Dashboard – Sender After Acceptance](learning-dashboard-sender-after.png)

--------

## Chat System

Chat functionality becomes available **only after a skill request has been accepted**.  
Users can then communicate directly to coordinate learning or skill exchange.

### Chat List
Displays all active conversations initiated after request acceptance.

### One-to-One Chat
Allows users to send and receive messages in real time with another user.

user123 chat 
![Chat of_user123](user123_chat.png)

user456 chat 
![Chat of_user456](user456_chat.png)

---

## Live Application

🔗 [See Live App on Netlify](https://skill-swap-project.netlify.app/)

