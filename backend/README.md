# Authentication Practice Project

This is a full-stack authentication application with React frontend and Node.js/Express backend.

## Features

- User Registration (Signup)
- User Login
- JWT Authentication
- Protected Routes
- Dashboard with user information
- Responsive design

## Project Structure

```
AuthPracice/
├── Frontend/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   ├── Signup.jsx
│   │   │   │   └── Auth.css
│   │   │   └── Dashboard.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   └── package.json
├── routes/                   # Backend routes
│   ├── auth.js              # Authentication routes
│   └── protected.js         # Protected routes
├── models/                  # Database models
│   └── user.js              # User model
├── connection/              # Database connection
│   └── db.js
├── app.js                   # Main server file
├── jwt.js                   # JWT middleware
└── package.json
```

## Setup Instructions

### Backend Setup

1. **Navigate to the root directory:**
   ```bash
   cd "c:\Users\mitha\OneDrive\Desktop\Node Js All Projects\AuthPracice"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   Make sure your `.env` file contains:
   ```
   MONGO_URL="your_mongodb_connection_string"
   ACCESS_TOKEN="your_jwt_secret_key"
   ```

4. **Start the backend server:**
   ```bash
   npm run dev
   ```
   The backend will run on `http://localhost:3000`

### Frontend Setup

1. **Navigate to the Frontend directory:**
   ```bash
   cd Frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the frontend development server:**
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

## API Endpoints

### Authentication Routes

- **POST** `/auth/signup` - Register a new user
- **POST** `/auth/login` - Login user

### Protected Routes

- **GET** `/api/profile` - Get user profile (requires authentication)
- **GET** `/api/dashboard-data` - Get dashboard data (requires authentication)

## Usage

1. **Start both servers** (backend on port 3000, frontend on port 5173)
2. **Open your browser** and go to `http://localhost:5173`
3. **Sign up** for a new account or **login** with existing credentials
4. **Access the dashboard** after successful authentication

## Authentication Flow

1. User registers/logs in through the frontend
2. Backend validates credentials and returns a JWT token
3. Frontend stores the token in localStorage
4. For protected routes, the token is sent in the Authorization header
5. Backend middleware validates the token and allows access

## Technologies Used

### Frontend
- React 19
- React Router DOM
- Axios
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (jsonwebtoken)
- bcrypt for password hashing
- CORS

## Security Features

- Password hashing with bcrypt
- JWT tokens for authentication
- Protected routes middleware
- Input validation
- CORS configuration

## Notes

- Make sure MongoDB is running and accessible
- Ensure both frontend and backend servers are running simultaneously
- The JWT token expires in 8 hours
- Passwords must be at least 6 characters long
