# Employee Management Application 🚀

A Dockerized Employee Management backend application built using Node.js, Express.js, and MongoDB with complete CRUD functionality and multi-container deployment using Docker Compose.

## 🌐 Live Demo

**Deployment Link:**
https://employee-management-backend-hkhu.onrender.com

> Note: The application requires a valid MongoDB Atlas connection string configured in Render environment variables for database operations.

---

## 📌 Features

* Create Employee records
* Retrieve all Employees
* Update Employee details
* Delete Employee records
* RESTful API implementation
* MongoDB database integration
* Docker containerization
* Multi-container deployment using Docker Compose
* Git and GitHub integration

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Docker
* Docker Compose
* Git
* GitHub

---

## 📂 Project Structure

```text
employee-management/
│
├── backend/
│   ├── models/
│   │   └── Employee.js
│   │
│   ├── routes/
│   │   └── employeeRoutes.js
│   │
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js
│   └── .env
│
├── docker-compose.yml
├── .gitignore
└── README.md
```

---

## 🔥 API Endpoints

### Create Employee

```http
POST /api/employees
```

Request Body:

```json
{
  "name": "Ashi Chauhan",
  "email": "ashi@example.com",
  "department": "IT",
  "salary": 35000
}
```

---

### Get All Employees

```http
GET /api/employees
```

---

### Update Employee

```http
PUT /api/employees/:id
```

Request Body:

```json
{
  "name": "Ashi Chauhan",
  "email": "ashi@example.com",
  "department": "DevOps",
  "salary": 50000
}
```

---

### Delete Employee

```http
DELETE /api/employees/:id
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the `backend` folder:

```env
MONGO_URI=mongodb://localhost:27017/employeedb
PORT=5000
```

For production deployment using MongoDB Atlas:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/employeedb
PORT=5000
```

---

## 🐳 Running Locally Using Docker Compose

Clone the repository:

```bash
git clone https://github.com/Ashichauhan98/employee-management-docker.git
cd employee-management
```

Build and start the containers:

```bash
docker compose up --build
```

Run in detached mode:

```bash
docker compose up -d
```

Stop containers:

```bash
docker compose down
```

View logs:

```bash
docker compose logs
```

---

## 🐳 Docker Architecture

```text
Client
   ↓
Node.js + Express Container
   ↓
MongoDB Container
```

---

## 📦 Docker Commands

Build Docker image:

```bash
docker build -t employee-backend .
```

Run MongoDB container:

```bash
docker run -d --name mongodb -p 27017:27017 mongo
```

Run backend container:

```bash
docker run -d --name employee-backend-container -p 5000:5000 employee-backend
```

Check running containers:

```bash
docker ps
```

---

## 🚀 Deployment

The application is deployed on Render using Docker and can be connected to MongoDB Atlas for production database hosting.

Deployment URL:

https://employee-management-backend-hkhu.onrender.com

---

## 📚 Learning Outcomes

Through this project, I gained experience with:

* REST API development
* MongoDB integration using Mongoose
* Docker containerization
* Docker Compose orchestration
* Git and GitHub workflows
* Cloud deployment using Render
* Environment variable management

---

 **👩‍💻 Author**

**Ashi Chauhan**

GitHub: https://github.com/Ashichauhan98

---

⭐ If you found this project useful, consider giving it a star on GitHub.
