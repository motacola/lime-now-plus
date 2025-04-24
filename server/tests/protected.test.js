import request from 'supertest';
import express from 'express';
import app from '../index.js';

describe('Protected Endpoints', () => {
  it('should reject unauthenticated access to /api/profile', async () => {
    const res = await request(app).get('/api/profile');
    expect(res.statusCode).toBe(401);
    expect(res.body.error).toBe('Unauthorized');
  });
});
