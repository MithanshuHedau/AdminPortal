const express = require("express");
const app = express();
const connectDb = require("./connection/db");
const authRoutes = require("./routes/auth");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

/* Middleware*/
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"], // Vite default ports
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/* Middleware*/

/* Routes */
app.use("/auth", authRoutes);
app.use("/api", require("./routes/protected"));
/* Routes */

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/home", (req, res) => {
  res.send("Welcome to the Home Page!");
});

app.use((req, res) => {
  res.status(404).send("Not found");
});

app.listen(3000, () => {
  connectDb();
  console.log("Server is running on port 3000");
});
