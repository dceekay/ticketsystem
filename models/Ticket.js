const db = require('../config/db');

const Ticket = {
  create: (data, callback) => {
    const query = "INSERT INTO tickets SET ?";
    db.query(query, data, callback);
  },
  findAll: (callback) => {
    const query = "SELECT * FROM tickets";
    db.query(query, callback);
  },
  findById: (id, callback) => {
    const query = "SELECT * FROM tickets WHERE ticket_id = ?";
    db.query(query, [id], callback);
  },
};

module.exports = Ticket;
