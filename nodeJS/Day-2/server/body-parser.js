// Función que deserializa el body.
const bodyParser = (req) => {
  return new Promise((resolve) => {
    // Array donde almacenaremos los buffers (chunks) que vayan llegando.
    let body = [];

    // El evento "data" se ejecuta cada vez que llegan nuevos datos. El parámetro
    // "chunk" hace referencia a un objeto de tipo Buffer.
    req.on('data', (chunk) => {
      body.push(chunk);
    });

    // El evento "end" se ejecuta cuando ya no hay más datos.
    req.on('end', () => {
      // Deserializamos el body con la ayuda del método "concat" seguido de "toString".
      // En este proceso transformamos el Buffer en texto.
      body = Buffer.concat(body).toString();

      // Retornamos con el resolve el body parseado a un objeto JS. ¡OJO! El body que recibe
      // el servidor debe estar en formato "raw". Si está en formato "x-www-form-urlencoded"
      // debemos importar "querystring" y usar "querystring.parse(body)"
      resolve(JSON.parse(body));
    });
  });
};

module.exports = {
  bodyParser,
};
