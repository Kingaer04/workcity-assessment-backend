Hospital Management System (HMS) - Backend

A simple Hospital Management System backend built with Node.js, Express.js, Passport.js, and MongoDB. This system provides basic user management functionality for hospital administrators and staff members.

## Features

### Admin Features
- Admin login/logout
- Add new staff members
- Delete existing staff members
- View all staff members

### Staff Features
- Staff login/logout (default password: phone number)
- Edit personal profile information
- View personal dashboard

## Tech Stack

- **Backend Framework:** Node.js with Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** Passport.js
- **Session Management:** Express Session

## Prerequisites

Before running this application, make sure you have the following:

- Node.js (v14 or higher)
- MongoDB Atlas account (free tier available)
- npm or yarn package manager

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kingaer04/Backend.git
   Backend
   ```

2. **Install dependencies**
   npm install
   ```

3. **MongoDB Atlas Setup**
   - Create a MongoDB Atlas account at [mongodb.com/atlas](https://www.mongodb.com/atlas)
   - Create a new cluster
   - Create a database user with read/write permissions
   - Whitelist your IP address (or use 0.0.0.0/0 for development)
   - Get your connection string from the "Connect" button

4. **Environment Setup**
   Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=5000
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/hms?retryWrites=true&w=majority
   SESSION_SECRET=your-secret-key-here
   NODE_ENV=development
   ```
   
   Replace `<username>`, `<password>`, and the cluster URL with your actual MongoDB Atlas credentials.

5. **Run the application**
   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

The server will start on `http://localhost:5500` (or the port specified in your .env file).

## Database Schema

### Admin Schema
```javascript
{
  email: String (required, unique),
  password: String (required),
  role: String (default: 'admin'),
  createdAt: Date,
  updatedAt: Date
}
```

### Staff Schema
```javascript
{
  name: String (required),
  email: String (required, unique),
  phone: String (required),
  password: String (required, default: phone number),
  department: String,
  position: String,
  role: String (default: 'staff'),
  isActive: Boolean (default: true),
  createdAt: Date,
  updatedAt: Date
}
```

## Security Features

- Session-based authentication with Passport.js
- Protected routes with authentication middleware
- Input validation and sanitization
- CORS configuration for secure cross-origin requests

## Default Credentials

### Admin Account
Create an admin account manually in your database or through seeding:
- Email: `admin@hospital.com`
- Password: `admin123` (change this in production)

### Staff Accounts
Staff members are created by admin with:
- Default password: Their phone number
- Staff should change password after first login

## Scripts

```json
{
  "start": "node server.js",
  "dev": "nodemon server.js",
  "test": "jest",
  "seed": "node scripts/seed.js"
}
```

## Project Structure

```
Backend/
├── controllers/
│   ├── adminController.js
│   ├── authController.js
│   └── staffController.js
├── middleware/
│   ├── auth.js
│   └── validation.js
├── models/
│   ├── Admin.js
│   └── Staff.js
├── routes/
│   ├── admin.js
│   ├── auth.js
│   └── staff.js
├── config/
│   ├── database.js
│   └── passport.js
├── utils/
│   └── helpers.js
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
