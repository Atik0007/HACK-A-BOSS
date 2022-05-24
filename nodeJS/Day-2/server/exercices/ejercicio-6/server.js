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
