const express = require('express');
const path = require('path');
const routes = require('./routes.js');

const app = express();

app.listen(3000, () => {
  console.log('Listenting on port 3000...');
})

let publicPath = path.join(__dirname, '../public');
app.use(express.static(path.join(publicPath)));
app.use(express.json());

// Routes
// To Home page;

app.get('/', (req, res) => {
  res.send(publicPath);
})

// To /users
app.get('/users', routes.router.users.get);
app.post('/users', routes.router.users.post);

// To /posts 
app.get('/forum', routes.router.forum.get);
app.post('/forum', routes.router.forum.post);
