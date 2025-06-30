const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const PORT = 5001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/contact', require('./routes/contact')(db)); // contact.js must export a function
app.use('/api/admin', require('./routes/admin/auth')(db)); // auth.js must export a function
app.use('/api/admin/messages', require('./routes/admin/messages')(db)); // messages.js must export a function

app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
