# 🌍 Planet API (MongoDB + Express)

## 📌 Overview
A REST API that allows users to store and manage information about planets in the solar system.

## 🛠 Setup Instructions

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/planet-api.git
cd planet-api
npm install
3️⃣ Create a .env File
Copy .env.example to .env
Update MONGO_URI with your MongoDB connection
4️⃣ Start the Server
sh
Copy
Edit
npm run dev
🌟 API Endpoints
Method	Route	Description
GET	/api/planets	Get all planets
POST	/api/planets	Add a planet
PATCH	/api/planets/:id	Update a planet
DELETE	/api/planets/:id	Remove a planet