// loginFail.test.js
import request from "supertest";
import app from "../src/app.js";

describe("TS03 - loginFail()", () => {
  beforeAll(async () => {
    await request(app).post("/login.html");
  });

  it("should return 'Login Failed' for wrong credentials", async () => {
    const res = await request(app)
      .post("/login")
      .send({ username: "wrongUser", password: "wrongPass" });

    expect(res.status).toBe(401);
    expect(res.body.message).toBe("Login Failed");
  });
});