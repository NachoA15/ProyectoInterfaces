# ProyectoInterfaces

Pasos para ejecutar la aplicación:

1. Ejecutar scripts de la base de datos en un workbench para mysql:
  - Script de la propia base de datos "piezzo_database_script".
  - Script para añadir datos a la bd creada con el script anterior, "piezzo_data_script".

2. Ejecutar 'npm install' tanto en el directorio app como en el de server.

3. Crear un archivo .env en el directorio server con los siguientes datos:
  HOST="127.0.0.1"
  PORT=puerto usado
  DB_USER=usuario de la base de datos
  PASSWORD=password del usuario
  DATABASE="bdinterfaces"

4. Ejecutar la aplicación:
  - Ejecutar 'npm start' en un terminal en el directorio 'server'
  - Ejecutar 'npm run dev' en un terminal en el directorio 'app'

Ya se podría abrir el navegador y acceder a la aplicación.
Si ocurre cualquier tipo de problema, contacte con alguno de los miembros del grupo.

