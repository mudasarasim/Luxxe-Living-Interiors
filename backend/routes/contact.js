const express = require('express');
const router = express.Router(); 


module.exports = (db) => {
  const router = express.Router(); 

  router.post('/', async (req, res) => {
    const { name, email, subject, message } = req.body;
    try {
      await db.query(
        'INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)',
        [name, email, subject, message]
      );
      res.json({ success: true, message: 'Message saved' });
    } catch (err) {
      console.error('DB error:', err.message);
      res.status(500).json({ success: false, message: 'Failed to save message' });
    }
  });

  return router;
};
