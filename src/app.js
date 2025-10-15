import express from "express";

const app = express();
app.use(express.json());

const VALID_USER = { username: "user123", password: "pass123" };
let TASKS = [];
const TOKENS = new Set();

function auth(req, res, next) {
  const token = (req.header("Authorization") || "").replace("Bearer ", "");
  if (!token || !TOKENS.has(token)) return res.status(401).json({ message: "Unauthorized" });
  next();
}

app.post("/login", (req, res) => {
  const { username, password } = req.body || {};
  if (username === VALID_USER.username && password === VALID_USER.password) {
    const token = "valid-token";
    TOKENS.add(token);
    return res.status(200).json({ status: "success", nextPage: "TaskList", token });
  }
  return res.status(401).json({ status: "fail", message: "Login Failed" });
});

app.post("/tasks", auth, (req, res) => {
  const { name } = req.body || {};
  if (!name) return res.status(400).json({ message: "name is required" });
  const newTask = { id: TASKS.length + 1, name, status: "Pending" };
  TASKS.push(newTask);
  return res.status(201).json(newTask);
});

app.get("/tasks", auth, (req, res) => {
  res.json(TASKS);
});

app.post("/__reset", (req, res) => {
  TASKS = [];
  TOKENS.clear();
  res.status(204).end();
});

export default app;