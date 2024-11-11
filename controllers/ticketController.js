const Ticket = require('../models/Ticket');

exports.createTicket = (req, res) => {
  const data = req.body;
  Ticket.create(data, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Ticket created successfully", ticketId: result.insertId });
  });
};

exports.getAllTickets = (req, res) => {
  Ticket.findAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};
