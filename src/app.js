const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

// Middleware to parse JSON payloads
app.use(express.json());

app.post("/signup", async (req, res) => {

    
  try {
    const user = new User(req.body);

    await user.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(7777, () => {
      console.log("Server is successfully listening on port 7777...");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected!!", err);
  });
