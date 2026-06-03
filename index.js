const express = require('express');
const db = require('./db');
const app = express();
const port = 3000;
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello from Portfolio!');
});
app.get('/projects', (req, res) => {
  const projects = db.prepare('SELECT * FROM projects').all();
  res.json(projects);
});
app.post('/projects', (req, res) => {
  const { title, description, url } = req.body;
  const stmt = db.prepare('INSERT INTO projects (title, description, url) VALUES (?, ?, ?)');
  const info = stmt.run(title, description, url);
  res.json({ id: info.lastInsertRowid, title, description, url });
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
