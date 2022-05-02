/**
 * Cada <li> debería tener una estructura similar a esta:
 *
 * <article>
 *      <header>
 *          <img src="${imagenUsuario}" alt="${nombreCompleto}">
 *          <h1>${nombreCompleto}</h1>
 *      </header>
 *      <p>${ciudad} (${país}), ${añoNacimiento}</p>
 * </article>
 *
 *
 * API: https://randomuser.me/api?results=10
 */

// 1. Seleccionamos los nodos que vamos a manejar.
const ul = document.querySelector('.userlist');
// 2. Creamos un fragmento de documento.
const fragment = document.createDocumentFragment();
// 3. Función asíncrona que genera un nº "X" de usuarios.
const getUsers = async (limit) => {
  // 3.1. Obtenemos el Response.
  const response = await fetch(`https://randomuser.me/api?results=${limit}`);
  // 3.2. Obtenemos el array de usuarios mediante destructuring.
  const { results } = await response.json();
  // 3.3. Recorremos el array de usuarios generando los li.
  results.forEach((user) => {
    // 3.3.1. Almacenamos toda la información del usuario que nos interesa.
    const { name, dob, picture, location } = user;
    // 3.3.2. Creamos el li.
    const li = document.createElement('li');
    // 3.3.3. Insertamos en el li las demás etiquetas.
    li.innerHTML = `
        <article>
            <header>
                <img src="${picture.large}" alt="${name.first} ${name.last}">
                <h1>${name.first} ${name.last}</h1>
            </header>
            <p>${location.city}, ${location.state} (${location.country}), ${dob.age}</p>
        </article>
    `;
    // 3.3.4. Insertamos el li como hijo del fragmento.
    fragment.appendChild(li);
    // 3.4. Insertamos el fragmento como hijo del ul.
    ul.appendChild(fragment);
  });
};
// 4. Llamamos a la función asíncrona y le pasamos el nº de usuarios manualmente
getUsers(10);
