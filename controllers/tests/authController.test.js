const request = require('supertest');
const app = require('../app');
const User = require('../models/User');

describe('POST /api/auth/reset-password', () => {
  it('sollte eine E-Mail zum Zurücksetzen des Passworts senden', async () => {
    const user = await User.create({ username: 'testuser', email: 'test@example.com', password: 'password123' });

    const res = await request(app)
      .post('/api/auth/reset-password')
      .send({ email: 'test@example.com' });

    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('E-Mail zum Zurücksetzen des Passworts gesendet');
  });
});
