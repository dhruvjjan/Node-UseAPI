//this is middleware for validating user data in an Express.js application.

const validateUser = (req, res, next) => {
  const { id, firstName, lastName, hobby } = req.body;
  if (!id|| !firstName || !lastName || !hobby) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  next();
};

module.exports = { validateUser };

