// updateStatus.test.js
import request from "supertest";
import app from "../src/app.js";

describe("TS04 - updateStatus()", () => {
  let token;

  beforeAll(async () => {
    await request(app).post("/__reset");
    const login = await request(app)
      .post("/login")
      .send({ username: "user123", password: "pass123" });
    token = login.body.token;

    await request(app)
      .post("/tasks")
      .set("Authorization", Bearer ${token})
      .send({ name: "Test Task" });
  });

  it("should update the task status to Done", async () => {
    const res = await request(app)
      .put("/tasks/1/status")
      .set("Authorization", Bearer ${token})
      .send({ status: "Done" });

    expect(res.status).toBe(200);
    expect(res.body.task.status).toBe("Done");
  });
});