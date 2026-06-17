# To-Do API REST

## Tecnologías Utilizadas
* **Node.js & Express:** Servidor y ruteo.
* **Zod:** Validación estricta de esquemas y datos de entrada.
* **JSON Web Token (JWT):** Sistema de autenticación y protección de rutas.
* **Dotenv:** Gestión de variables de entorno.

## Instalación y Configuración

1. Clona este repositorio:
   git clone https://github.com/IDS-Mandujano/to-do-API.git

2. Instala las dependencias:
   npm install

3. Crea un archivo `.env` en la raíz del proyecto y configura tus variables basándote en este ejemplo:
   PORT=8080

4. Inicia el servidor:
   node src/app.js

## Autenticación (Flujo de uso)
Esta API requiere autenticación para administrar las tareas.
1. Haz un `POST` a `/register` con un `username` y `password` para crear un usuario.
2. Haz un `POST` a `/login` con esas credenciales. La API devolverá un Token.
3. En tus peticiones a las rutas de `/tasks`, incluye el token en los headers:
   * `Authorization: Bearer <token>`

## Endpoints Principales

### Auth
* `POST /register` - Registra un nuevo usuario.
* `POST /login` - Autentica al usuario y devuelve un JWT.

### Tasks (Requieren JWT)
* `GET /tasks` - Obtiene todas las tareas (Soporta query `?completed=true|false`).
* `GET /tasks/:id` - Obtiene una tarea específica.
* `POST /tasks` - Crea una nueva tarea.
* `PUT /tasks/:id` - Actualiza una tarea existente.
* `DELETE /tasks/:id` - Elimina una tarea (Devuelve 204 No Content).

## Decisiones Técnicas
* **Arquitectura Limpia:** El proyecto está dividido en rutas, controladores, middlewares, modelos y esquemas para garantizar la escalabilidad y el principio de responsabilidad única.
* **Validación de Datos:** Se implementó `Zod` como middleware global para interceptar datos mal formados antes de que lleguen a los controladores, devolviendo respuestas 400 limpias.
* **Seguridad:** Se protegió el CRUD completo de tareas con un middleware personalizado de JWT, manejando adecuadamente los códigos HTTP 401 y 403.