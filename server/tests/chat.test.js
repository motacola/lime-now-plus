import request from 'supertest';
import app from '../index.js';

describe('Chat API', () => {
  it('should reject empty messages', async () => {
    const res = await request(app).post('/api/chat').send({ message: '' });
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBeDefined();
  });

  it('should respond to valid messages', async () => {
    const res = await request(app).post('/api/chat').send({ message: 'Hello' });
    expect(res.statusCode).toBe(200);
    expect(res.body.reply).toBeDefined();
  });
});
