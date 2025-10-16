import request from "supertest";
import app from "../src/app.js";




  describe("TS05: deleteTask()", () => {
  let token;
  beforeAll(async () => {
    await request(app).post("/__reset");


    const login = await request(app)
      .post("/login")
      .send({ username: "user123", password: "pass123" });
    token = login.body.token;
  });


  it("ควรลบ task ตาม id ได้สำเร็จ (204) แล้วไม่เจอใน Task List", async () => {
    const createRes = await request(app)
      .post("/tasks")
      .set("Authorization", `Bearer ${token}`)
      .send({ name: "Task to delete" });
    expect(createRes.status).toBe(201);

    const taskId = createRes.body.id;
    const delRes = await request(app)
      .delete(`/tasks/${taskId}`)
      .set("Authorization", `Bearer ${token}`);
    expect(delRes.status).toBe(204);

 
    const listRes = await request(app)
      .get("/tasks")
      .set("Authorization", `Bearer ${token}`);
    expect(listRes.status).toBe(200);
    const ids = listRes.body.map(t => t.id);
    expect(ids).not.toContain(taskId);
  });

  it("ควรคืน 404 เมื่อพยายามลบ task ที่ไม่มีอยู่", async () => {
    const delRes = await request(app)
      .delete(`/tasks/99999`)
      .set("Authorization", `Bearer ${token}`);
    expect(delRes.status).toBe(404);
    expect(delRes.body.message).toBe("Task not found");
  });
});