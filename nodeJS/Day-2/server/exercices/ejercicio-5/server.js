/**
 * #################
 * ## Ejercicio 5 ##
 * #################
 *
 * Servidor web que escucha cualquier request.
 *
 * - Cuando la request es un `POST` a `/data`, se devuelve el *JSON* recibido.
 *
 * - Cuando es otra request cualquiera, se responde con código `404` sin body.
 *
 */
require('dotenv').config();
const { bodyParser } = require('../../body-parser');
const http = require('http');
const { PORT } = process.env;
const server = http.createServer();
server.on('request', async (req, res) => {
  if (req.method === 'POST' && req.url === '/data') {
    const body = await bodyParser(req);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(body));
  } else {
    res.statusCode = 404;
    res.end();
  }
});
server.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
