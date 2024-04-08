const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3333;

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Route for /login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if username and password are correct
  if (username === 'user' && password === 'password') {
    // If correct, return status code 200
    return res.sendStatus(200);
  } else {
    // If incorrect, return status code 401 (Unauthorized)
    return res.sendStatus(401);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
