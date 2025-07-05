const express = require("express");
const mongoose = require("mongoose");


const logger = require("./middleware/logger");
const validateUser = require("./middleware/validator");
const userRoutes = require("./routes/userRoutes");

// Middleware
const app = express();
app.use(express.json());
app.use(logger);

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/");
// Checking if the connection is successful or not
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("✅ MongoDB connected");
});

app.use("/users", userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
