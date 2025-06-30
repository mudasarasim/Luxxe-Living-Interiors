const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = (db) => {
  const router = express.Router();

  router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
      const [rows] = await db.query('SELECT * FROM admin_users WHERE username = ?', [username]);

      if (rows.length === 0) {
        console.log('❌ No user found for username:', username);
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      const user = rows[0];

      // Debug log: show password types and values
      console.log('✅ User found:', user.username);
      console.log('🔐 Entered password:', password);
      console.log('🔐 Stored DB password:', user.password, '| Type:', typeof user.password);

      if (!user.password) {
        return res.status(500).json({ message: 'Stored password is missing' });
      }

      // Ensure stored password is a string
      const storedPassword = Buffer.isBuffer(user.password)
        ? user.password.toString()
        : user.password;

      // Compare entered password with stored hash
      const valid = await bcrypt.compare(password, storedPassword);

      if (!valid) {
        console.log('❌ Password mismatch');
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      // Generate JWT
      const token = jwt.sign(
        { id: user.id, username: user.username },
        'khubaibisagoodb$y', // ⚠️ Should be in env in production
        { expiresIn: '1d' }
      );

      console.log('✅ Login successful for:', user.username);
      res.json({ token });

    } catch (err) {
      console.error('🔥 Login error:', err);
      res.status(500).json({ message: 'Server error' });
    }
  });

  return router;
};
