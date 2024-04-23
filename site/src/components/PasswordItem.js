const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 5000;

const secretKey = 'your_secret_key';

app.use(bodyParser.json());

// Dummy user data (should be stored in a database in a real application)
const users = [
  { id: 1, username: 'user1', password: '$2b$10$PucP17D1QOcZJrUvcshyCusG7ZlBeVkXQmKocbIRcAHN.q/2ogb1O' }, // password is 'password1'
  { id: 2, username: 'user2', password: '$2b$10$1f8YdLS7OcfYmy7fNzI/vutqM6z3wnEdcj1ISrQcHXEcz2a1IYfMy' } // password is 'password2'
];

// Login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }
  
  try {
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ userId: user.id }, secretKey);
      return res.json({ token });
    } else {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Protected route
app.get('/protected', verifyToken, (req, res) => {
  // Example of a protected route
  res.json({ message: 'This is a protected route' });
});

// Middleware to verify JWT token
function verifyToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ error: 'Token is required' });
  }
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }
    req.userId = decoded.userId;
    next();
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
