// tests/loginFail.test.js
const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const { login } = require('../controllers/authController');

const app = express();
app.use(bodyParser.json());
app.post('/login', login);

describe('TS03 - loginFail()', () => {
  it('should return "Login Failed" for incorrect credentials', async () => {
    const response = await request(app)
      .post('/login')
      .send({ username: "wrongUser", password: "wrongPass" });

    expect(response.statusCode).toBe(401);
    expect(response.body.message).toBe("Login Failed");
  });
});
