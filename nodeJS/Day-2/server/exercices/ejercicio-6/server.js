/**
 * #################
 * ## Ejercicio 6 ##
 * #################
 *
 * Servidor web que gestiona objetos del tipo:
 *
 *      {
 *          email: 'pepito@gmail.com',
 *          message: 'Hola soy Pepito',
 *      }
 *
 * - Internamente usará un fichero `database.json` donde se almacenarán datos. Este archivo
 *   se sitúa en el directorio `/database` dentro de la raiz del servidor.
 *
 * - Cuando la request es un `GET` a `/api/messages`, se sirven al cliente con todos los datos
 *   que hay en el *JSON* de almacenamiento.
 *
 * - Cuando la request es un `POST` a `/api/messages`, se pushea el mensaje recibido en el *JSON*
 *   de usuarios, y se responde al cliente con todo el contenido de dicho fichero.
 *
 * - Cuando es otra request cualquiera, se responde con código `404` sin body.
 *
 */
require('dotenv').config();
const { bodyParser } = require('../../body-parser');
const http = require('http');
const { PORT } = process.env;
const server = http.createServer();
const path = require('path');
const fs = require('fs');
const databasePath = path.join(__dirname, './database/users.json');
const users = getDatabase();
function getDatabase() {
  return JSON.parse(fs.readFileSync(databasePath, 'utf8'));
}

server.on('request', async (req, res) => {
  if (req.method === 'GET' && req.url === '/api/messages') {
    res.statusCode = 200;
    res.end(JSON.stringify(getDatabase()));
    res.setHeader('Content-Type', 'application/json');
  } else if (req.method === 'POST' && req.url === '/api/messages') {
    const body = await bodyParser(req);
    const { email, message } = body;
    const newMessage = {
      email,
      message,
    };
    users.push(newMessage);
    fs.writeFileSync(databasePath, JSON.stringify(users));
    res.statusCode = 200;
    res.end(JSON.stringify(users));
    res.setHeader('Content-Type', 'application/json');
  } else {
    res.statusCode = 404;
    res.end();
  }
});
server.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
