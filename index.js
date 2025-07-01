//this is common js code for a simple Express.js application that manages users.
// It includes routes for fetching, adding, updating, and deleting users,
// along with middleware for logging and validating user data.  

const express = require("express"); // Importing the Express.js framework
const app = express();
const port = 3000;

const { users } = require("./data"); // Importing the users data from data.js
const logger = require("./middleware/logger");
const { validateUser } = require("./middleware/validator"); // Importing the validation middleware

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(logger); // Logging middleware

// GET /users – fetch all users
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

// GET /users/:id – fetch user by ID
app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === req.params.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json(user); 
});

// POST /user – add new user
app.post("/user", validateUser, (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json({ message: "User created", user: newUser });
});

// PUT /user/:id – update user by ID
app.put("/user/:id", validateUser, (req, res) => {
  const user = users.find((u) => u.id === req.params.id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  
  // Update user details
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.hobby = req.body.hobby;

  res.status(200).json({ message: "User updated", user });
});


// DELETE /user/:id – delete user by ID
app.delete("/user/:id", (req, res) => {
  const index = users.findIndex((u) => u.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }
  users.splice(index, 1);
  res.status(200).json({ message: "User deleted" });
});

// Global error handling (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
