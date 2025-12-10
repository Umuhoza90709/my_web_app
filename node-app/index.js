cat > index.js << EOL
const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 3000;

// Connect to MySQL
const db = mysql.createConnection({
  host: 'db',       // Service name from docker-compose
  user: 'root',
  password: 'password',
  database: 'mydb'
});

db.connect(err => {
  if (err) console.error('DB connection error:', err);
  else console.log('Connected to MySQL database');
});

app.get('/', (req, res) => {
  res.send('Hello, World! Multi-container app with persistent DB.');
});

app.listen(PORT, () => {
  console.log(\`Server running on http://localhost:\${PORT}\`);
});
EOL
