const Payment = require('../models/Payment');

exports.createPayment = (req, res) => {
  const data = req.body;
  Payment.create(data, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Payment created successfully", paymentId: result.insertId });
  });
};

exports.getAllPayments = (req, res) => {
  Payment.findAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};
