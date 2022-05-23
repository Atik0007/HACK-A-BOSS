// argumento que le llega a la función "double(x)" del módulo "simple-maths" no sea un número, lance un error.

function double(x) {
  if (isNaN(x)) {
    throw new Error('El argumento no es un número ');
  }
  return x * 2;
}

module.exports = { double };
