// createAdmin.js
const bcrypt = require('bcrypt');
const db = require('./db');

(async () => {
  try {
    const hash = await bcrypt.hash('admin123', 10);
    console.log('Hashed password:', hash);
    await db.query('DELETE FROM admin_users WHERE username = ?', ['admin']);
    const result = await db.query('INSERT INTO admin_users (username, password) VALUES (?, ?)', ['admin', hash]);
    console.log('Insert result:', result);
    console.log('✅ Admin user created');
  } catch (err) {
    console.error('Error creating admin user:', err);
  } finally {
    process.exit();
  }
})();
