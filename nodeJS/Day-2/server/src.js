require('dotenv').config();
const http = require('http');
const users = require('./users');
const server = http.createServer();
const { bodyParser } = require('./body-parser');

const { PORT } = process.env;

server.on('request', async (req, res) => {
  if (req.url === '/users' && req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(users));
  } else if (req.url === '/users' && req.method === 'POST') {
    const body = await bodyParser(req);
    res.statusCode = 200;
    console.log(body);
    res.end();
  }
});

server.listen(4000, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
