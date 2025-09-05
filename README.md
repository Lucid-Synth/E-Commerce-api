# 🛒 E-commerce Products API

A simple **RESTful API** for managing products in an e-commerce system, built with **Node.js, Express, and MongoDB**.

---

## 🚀 Features

* Create new products
* Retrieve all products
* Retrieve a single product by ID
* Update product details
* Delete products
* Error handling for invalid requests

---

## 📂 Project Structure

```
ecommerce-api/
├── package.json
├── server.js
├── Database/
│   └── db.js
├── Models/
│   └── Product.js
└── Routes/
    └── product.js
```

---

## 🛠️ Tech Stack

* **Node.js** – Server runtime
* **Express.js** – Web framework
* **MongoDB (Atlas or local)** – Database
* **Mongoose** – ODM for MongoDB
* **Nodemon** (dev) – Auto restart server during development

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ecommerce-api.git
cd ecommerce-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```
PORT=5000
MONGO_URI=your-mongodb-connection-string
```

### 4. Start the server

```bash
npm run dev   # using nodemon
```

Server will run on:

```
http://localhost:5000
```

---

## 📌 API Endpoints

### **Base URL:** `/api/products`

| Method | Endpoint | Description              |
| ------ | -------- | ------------------------ |
| POST   | `/`      | Create a new product     |
| GET    | `/`      | Get all products         |
| GET    | `/:id`   | Get single product by ID |
| PUT    | `/:id`   | Update product by ID     |
| DELETE | `/:id`   | Delete product by ID     |
