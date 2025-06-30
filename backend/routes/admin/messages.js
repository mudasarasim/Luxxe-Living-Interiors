const express = require('express');
const router = express.Router(); 


module.exports = (db) => {
  const router = express.Router();

  router.get('/', async (req, res) => {
    try {
      const [rows] = await db.query('SELECT * FROM contacts ORDER BY created_at DESC');
      res.json(rows);
    } catch (err) {
      console.error('Get messages error:', err);
      res.status(500).json({ error: 'Failed to fetch messages' });
    }
  });

  return router;
};
