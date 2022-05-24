/**
 * #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Servidor web que escucha cualquier request en el puerto 4000, y devuelve siempre status
 * `200` con el body:
 *
 *      {
 *          curso: 'backend'
 *      }
 *
 */
require('dotenv').config();
const http = require('http');
const curso = require('./curso');
const server = http.createServer();
const { PORT } = process.env;

server.on('request', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(curso));
});
server.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
