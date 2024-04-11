exports.login = (req, res) => {
  const { username, password } = req.body;

  // Check if username and password are correct
  if (username === 'user' && password === 'password') {
    // If correct, return status code 200
    return res.sendStatus(200);
  } else {
    // If incorrect, return status code 401 (Unauthorized)
    return res.sendStatus(401);
  }
};
