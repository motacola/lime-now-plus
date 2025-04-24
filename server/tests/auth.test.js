import request from 'supertest';
import express from 'express';
import session from 'express-session';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import bcrypt from 'bcrypt';
import app from '../index.js';

// Basic tests for auth endpoints
(async () => {
  // Setup test DB
  const db = await open({ filename: ':memory:', driver: sqlite3.Database });
  await db.exec('CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT UNIQUE, password TEXT)');
  const password = await bcrypt.hash('testpass', 10);
  await db.run('INSERT INTO users (email, password) VALUES (?, ?)', ['test@example.com', password]);

  // Test login
  const res = await request(app)
    .post('/api/login')
    .send({ email: 'test@example.com', password: 'testpass' });
  console.log('Login response:', res.body);
})();
