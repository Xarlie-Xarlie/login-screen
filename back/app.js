const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3333;

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Use routes
app.use(routes);

// Start the server
module.exports = app;
