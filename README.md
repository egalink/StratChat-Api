## Servicios API para Strat-Chat

Servicios creados en framework [adonis.js](https://adonisjs.com/)

### Requerimientos:

- Node.js >= 8.0.0  
- npm >= 3.0.0
- git

### Instalación Adonis  CLI:

`npm i -g @adonisjs/cli`

### Configuración de servicios:

> Todos los comandos listados a continuación deberán ser ejecutados en la carpeta raíz del proyecto.

1. Instalar dependencias del proyecto:

`npm i`

2. Crear un archivo de variables de entorno: `.env` en la carpeta raíz del proyecto, copiar y pegar el sig. contenido:

```
HOST=127.0.0.1
PORT=3333
NODE_ENV=development
APP_NAME=AdonisJs
APP_URL=http://${HOST}:${PORT}
CACHE_VIEWS=false
APP_KEY=
AUTH_AUTHENTICATOR=api
SESSION_DRIVER=cookie
DB_CONNECTION=sqlite
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_DATABASE=strat-chat
HASH_DRIVER=bcrypt
```

4. Ejecutar comando `adonis key:generate` para generar una clave privada.

### Migraciones:

Se utiliza SQLite como base de datos para agilizar la potabilidad de los servicios pero puede utilizarse cualquier tipo de servidor de BD: [saber más](https://adonisjs.com/docs/4.1/database#_supported_databases)

Ejecutando el comando:

`adonis migration:run`


### Ejecutar servicios:

`npm run start`
