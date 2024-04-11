const request = require('supertest');
const app = require('../app');

describe('POST /login', () => {
  it('should respond with status 200 if username and password are correct', async () => {
    const response = await request(app)
      .post('/login')
      .send({ username: 'user', password: 'password' });

    expect(response.statusCode).toBe(200);
  });

  it('should respond with status 401 if username or password are incorrect', async () => {
    const response = await request(app)
      .post('/login')
      .send({ username: 'invalid', password: 'invalid' });

    expect(response.statusCode).toBe(401);
  });
});
