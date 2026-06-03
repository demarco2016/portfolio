const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static('public'));
let projects = [];
app.get('/api/projects', (req, res) => res.json(projects));
app.post('/api/projects', (req, res) => {
  const {title, description, url} = req.body;
  const p = {id: projects.length+1, title, description, url};
  projects.push(p);
  res.json(p);
});
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}`);
});
