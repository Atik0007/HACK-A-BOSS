# Cafetería App

Desarrolla un servidor sencillo que permita a los clientes de un bar de bebidas (no
se sirven comidas) atender a los clientes cómodamente desde sus mesas.

# Características

-   Se diferencian dos tipos de usuarios: "admin" y "normal".

-   Solo el administrador (propietario del bar o jefe de sala) puede dar de alta a
    otros usuarios (camareros), que por defecto serán de tipo "normal".

-   Los clientes no necesitan usuario, navegarán de forma anónima desde un terminal
    ubicado en cada una de las mesas del local.

-   Los clientes no podrán hacer la solicitud de bebidas desde el terminal, deberán
    llamar al camarero y comunicárselo verbalmente.

-   Del mismo modo los clientes deberán solicitar la cuenta al camarero cuando quieran
    pagar.

# Entidades en la base de datos

-   [users] - Pueden ser de tipo "admin" (propietario del bar) o "normal" (camareros).

    - id
    - name
    - role 
    - createdAt

-   [tables] - Contiene información acerca de las mesas del local.

    - id
    - request
    - pay
    - attended
    - createdAt

-   [drinks] - Lista de bebidas que se sirven en el establecimiento.

    - id
    - name
    - createdAt

# Endpoints clientes (usuarios anónimos)

-   GET - [/drinks] - Mostrar listado de bebidas.
-   PUT - [/table/:idTable/request] - Solicitar la atención de un camarero o camarera disponible.
-   PUT - [/table/:idTable/pay] - Solicitar la cuenta.

# Endpoints camareros (usuarios normales)

-   PUT - [/table/:idTable/attend] - Atender una solicitud de atención o de cobro.
-   PUT - [/table/:idTable/request/end] - Finalizar una solicitud de atención.
-   PUT - [/table/:idTable/pay/end] - Finalizar una solicitud de cuenta.

# Endpoints administrador

-   POST - [/drink] - Registrar una nueva bebida.
-   POST - [/table] - Registrar una nueva mesa.
-   POST - [/user/register] - Registrar un nuevo usuario normal (camarero).
-   DELETE - [/drinks] - Eliminar una bebida.
-   DELETE - [/table] - Eliminar una mesa.
-   DELETE - [/user/:idUser] - Eliminar un usuario.