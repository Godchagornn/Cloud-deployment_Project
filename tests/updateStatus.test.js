// tests/updateStatus.test.js
const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const { updateStatus } = require('../controllers/taskController');

const app = express();
app.use(bodyParser.json());
app.put('/tasks/:id/status', updateStatus);

describe('TS04 - updateStatus()', () => {
  it('should update the task status to Done', async () => {
    const response = await request(app)
      .put('/tasks/1/status')
      .send({ status: "Done" });

    expect(response.statusCode).toBe(200);
    expect(response.body.task.status).toBe("Done");
  });
});
// controllers/authController.js