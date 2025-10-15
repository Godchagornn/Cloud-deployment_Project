import request from "supertest";
import app from "../src/app.js";

describe("TS02: createTask()", () => {
  let token;

  beforeAll(async () => {
    await request(app).post("/__reset");
    const login = await request(app)
      .post("/login")
      .send({ username: "user123", password: "pass123" });
    token = login.body.token;
  });

  it('ควรสร้าง "Test Task" แล้วแสดงใน Task List', async () => {
    const createRes = await request(app)
      .post("/tasks")
      .set("Authorization", `Bearer ${token}`)
      .send({ name: "Test Task" });

    expect(createRes.status).toBe(201);
    expect(createRes.body.name).toBe("Test Task");
    expect(createRes.body.status).toBe("Pending");

    const listRes = await request(app)
      .get("/tasks")
      .set("Authorization", `Bearer ${token}`);

    expect(listRes.status).toBe(200);
    const names = listRes.body.map(t => t.name);
    expect(names).toContain("Test Task");
  });
});