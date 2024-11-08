// index.js
const express = require('express');
const db = require('./config/db');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Ticket and Payment Management System API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
