/**
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
 * - Cuando la request es un `POST` a `/api/messages`, se incluye el objeto recibido en el *JSON*
 *   de almacenamiento, y se responde al cliente con todos los datos que hay en el *JSON* de
 *   almacenamiento.
 *
 * - Cuando es otra request cualquiera, se responde con código `404` sin body.
 *
 */

require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs/promises');
const users = require('./database/users.json');
const usersPath = path.join(__dirname, 'database/users.json');
const { PORT } = process.env;
const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.get('/api/messages', (req, res) => {
    res.json(users);
});

app.post('/api/messages', async (req, res) => {
    const { email, message } = req.body;

    users.push({ email, message });
    await fs.writeFile(usersPath, JSON.stringify(users));
    res.json(users);
});

app.use((req, res) => {
    res.status(404).send();
});
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
