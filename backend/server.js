require("dotenv").config();

const express = require("express");
const cors = require("cors");
const http = require("http");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const protect = require("./middleware/authMiddleware");

const initializeSocket = require("./socket");

const app = express();
const server = http.createServer(app);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Server Running");
});

// Protected Route
app.get("/api/profile", protect, (req, res) => {
  res.json({
    message: "Protected Route Accessed",
    user: req.user,
  });
});

// Initialize Socket.IO
initializeSocket(server);

// Start Server
const startServer = async () => {
  try {
    await connectDB();

    server.listen(5000, () => {
      console.log("Server running on port 5000");
    });

  } catch (error) {
    console.log(error);
  }
};

startServer();