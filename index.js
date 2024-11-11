// index.js
const express = require('express');
const db = require('./config/db');
const app = express();
const PORT = process.env.PORT || 5000;

const ticketRoutes = require('./routes/ticketRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

app.use(express.json());

app.use('/api/tickets', ticketRoutes);
app.use('/api/payments', paymentRoutes);

app.get('/', (req, res) => {
  res.send('Ticket and Payment Management System API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
