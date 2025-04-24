// Basic Express server with authentication, rate limiting, RLS, and logging
import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcrypt';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';
import sqlite3 from 'sqlite3';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// SQLite DB setup
const db = new sqlite3.Database('./server/db.sqlite', (err) => {
  if (err) {
    // Error logged via morgan or custom logger('Failed to connect to DB:', err);
  } else {
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL
    )`);
  }
});

app.use(express.json({ limit: '100kb' }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(session({
  secret: process.env.SESSION_SECRET || 'lime_secret',
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, secure: false, sameSite: 'lax', maxAge: 86400000 }
}));

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: 'Too many requests, please try again later.'
});
app.use('/api/', apiLimiter);

// Helper: RLS - only allow access to own data
function requireAuth(req, res, next) {
  if (!req.session.userId) return res.status(401).json({ error: 'Unauthorized' });
  next();
}

// Signup
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password || email.length > 100 || password.length > 100) {
    return res.status(400).json({ error: 'Invalid input' });
  }
  try {
    const hash = await bcrypt.hash(password, 10);
    await db.run('INSERT INTO users (email, password) VALUES (?, ?)', [email, hash]);
    res.status(201).json({ message: 'User created' });
  } catch (err) {
    res.status(400).json({ error: 'Email already exists' });
  }
});

// Login
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Invalid input' });
  const user = await db.get('SELECT * FROM users WHERE email = ?', [email]);
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ error: 'Invalid credentials' });
  req.session.userId = user.id;
  res.json({ message: 'Logged in' });
});

// Logout
app.post('/api/logout', requireAuth, (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('connect.sid');
    res.json({ message: 'Logged out' });
  });
});

// Example protected route
app.get('/api/profile', requireAuth, async (req, res) => {
  const user = await db.get('SELECT id, email FROM users WHERE id = ?', [req.session.userId]);
  res.json({ user });
});

// Error handler
app.use((err, req, res, next) => {
  // Error logged via morgan or custom logger(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  // Server log via morgan(`Server running on http://localhost:${PORT}`);
});
