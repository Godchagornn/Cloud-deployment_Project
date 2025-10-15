import request from "supertest";
import app from "../src/app.js";

describe("TS01: loginSuccess()", () => {
  beforeAll(async () => {
    await request(app).post("/__reset");
  });

  it("ควรล็อกอินสำเร็จและไปหน้า Task List", async () => {
    const res = await request(app)
      .post("/login")
      .send({ username: "user123", password: "pass123" });

    expect(res.status).toBe(200);
    expect(res.body.status).toBe("success");
    expect(res.body.nextPage).toBe("TaskList");
    expect(res.body.token).toBeDefined();
  });
});