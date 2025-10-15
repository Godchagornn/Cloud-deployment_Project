const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const { deleteTask } = require('../controllers/taskController');

const app = express();
app.use(bodyParser.json());
app.delete('/tasks/:id', deleteTask);

describe('TS05 - deleteTask()', () => {
  it('should delete the task and remove it from the Task List', async () => {
    const response = await request(app)
      .delete('/tasks/1');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Task deleted successfully");
  });
});