/**
 * #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Servidor web que escucha en el puerto 4000.
 *
 * - Cuando se llama al *endpoint* `/curso`, devuelve status `200 OK` con el body:
 *
 *      {
 *          curso: 'backend'
 *      }
 *
 * - Cuando se llama al *endpoint* `/message`, devuelve status `200 OK` con el body:
 *
 *      {
 *          message: 'Hello world!'
 *      }
 *
 * - Cuando se llama a cualquier otro *endpoint*, devuelve status `404 NOT FOUND` con el body.
 *
 *      {
 *          message: 'No lo encuentro'
 *      }
 *
 */
require('dotenv').config();
const http = require('http');
const { PORT } = process.env;
const curso = require('./curso');
const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/curso') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(curso));
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
