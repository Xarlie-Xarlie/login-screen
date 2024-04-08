const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;

// Middleware to parse JSON
app.use(express.json());

// Route for /login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if username and password are correct
  if (username === 'user' && password === 'password') {
    // If correct, return status code 200
    return res.sendStatus(200);
  } else {
    // If incorrect, return status code 401 (Unauthorized)
    return res.status(401).json({ error: 'Wrong username or password' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
