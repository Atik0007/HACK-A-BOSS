/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Servidor web que escucha en el puerto 4000.
 *
 * - Cuando se llama a la ruta `/curso`, devuelve status `200` con el body:
 *
 *       {
 *          curso: 'backend'
 *       }
 *
 * - Cuando se llama a cualquier ruta distinta devuelve status `200 OK` con el body:
 *
 *      {
 *          message: 'Hello world!'
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
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Hello world!' }));
  }
});
server.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
