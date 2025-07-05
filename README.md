
# 👤 User Management RESTful API (Node.js + Express)

This is a simple RESTful API built with Node.js and Express that allows you to manage a list of users. The API supports CRUD operations, custom middleware for logging and validation, and uses an in-memory array as the data source.

---

## 📋 Features

- ✅ Get all users
- ✅ Get a specific user by ID
- ✅ Add a new user
- ✅ Update user details
- ✅ Delete a user by ID
- ✅ Middleware for logging requests
- ✅ Middleware for validating input fields
- ✅ Proper error handling with status codes

---

## 🔧 Technologies Used

- Node.js
- Express.js

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/user-api.git
cd user-api
```

### 2. Install Dependencies

```bash
npm install
```
### 3. Start the Server

```bash
npm start
(or) node index.js
```
---

## 🧪 API Endpoints with Screenshots

---

### 📍 GET `/users` – Fetch All Users

Returns the list of all users.

**✅ Status:** `200 OK`

📸 Screenshot:

![GET All Users](/screenshots/getAll.png)

---

### 📍 GET `/users/:id` – Fetch User by ID

Returns details of a user with the specified ID.

**✅ Status:** `200 OK`  
**❌ If not found:** `404 Not Found`

📸 Screenshot:

![GET User by ID](/screenshots/getOne.png)

---

### 📍 POST `/user` – Create a New User

Adds a new user.

**Required Fields:** `id`, `firstName`, `lastName`, `hobby`  
**✅ Status:** `201 Created`  
**❌ If missing fields:** `400 Bad Request`

📸 Screenshot:

![POST Create User](/screenshots/post.png)

---

### 📍 PUT `/user/:id` – Update a User

Updates an existing user's data.

**✅ Status:** `200 OK`  
**❌ If user not found or fields missing:** `404 / 400`

📸 Screenshot:

![PUT Update User](/screenshots/put.png)

---

### 📍 DELETE `/user/:id` – Delete a User

Deletes a user based on ID.

**✅ Status:** `200 OK`  
**❌ If user not found:** `404 Not Found`

📸 Screenshot:

![DELETE User](/screenshots/delete.png)

---

## Github Repository

[https://github.com/dhruvjjan/Node-UseAPI.git](https://github.com/dhruvjjan/Node-UseAPI.git)

---

## 🛢 MongoDB Integration
This version uses MongoDB and Mongoose for storing user data.

### 🧪 MongoDB Screenshots

 📍 GET `/users` – Fetch All Users

![GET All Users](/screenshots/mdb%20get%20all.png)

---

 📍 GET `/users/:id` – Fetch User by ID

📸 Screenshot:

![GET User by ID](/screenshots/mdb%20get%20user.png

---
 📍 POST `/user` – Create a New User

![POST Create User](/screenshots/mdb%20post.png)

---

 📍 PUT `/user/:id` – Update a User

![PUT Update User](/screenshots/mdb%20put.png)

---

 📍 DELETE `/user/:id` – Delete a User

![DELETE User](/screenshots/mdb%20delete.png)

📍 MongoDB Compass
![MongoDB Compass](/screenshots/Mongo.png)

---