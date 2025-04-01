## Arquitectura

crud-example/  
│  
├── models/  
│ └── user.model.js  
│  
├── routes/  
│ └── user.routes.js  
│  
├── database.js  
├── server.js  
├── package.json

## Instalaciones

mkdir crud-example  
cd crud-example  
npm init -y  
npm install express sequelize sqlite3 body-parser

## Que es Express?

Express es un framework para Node.js que facilita la creación de aplicaciones web y APIs.

🔧 ¿Qué hace?
Express proporciona una capa ligera encima de Node.js para:

Manejar rutas (GET, POST, PUT, DELETE).

Procesar solicitudes y respuestas HTTP.

Usar middleware para gestionar autenticación, errores, logs, entre otros.

Servir contenido estático.

Crear APIs RESTful de forma muy rápida y simple.
