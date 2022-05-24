/**
 * #################
 * ## Ejercicio 4 ##
 * #################
 *
 * Servidor que se comporta igual que el del ejercicio 3, pero además retorne
 * el *método* y la *URL* de cada request.
 *
 */
require('dotenv').config();
const http = require('http');
const { PORT } = process.env;
const curso = require('./curso');
const server = http.createServer();

server.on('request', (req, res) => {
  let body = [];
  if (req.url === '/curso') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(curso));
    req.on('data', () => {
      body.push(req.toString());
    });
  } else if (req.url === '/message') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Hello world!' }));
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'No lo encuentro' }));
  }
});
server.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
