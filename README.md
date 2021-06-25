# Prueba Tecnica Clientes OrionTek

## Documentacion
La documentacion del API es generada con [Swagger JsDoc](https://www.npmjs.com/package/swagger-jsdoc) y [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express), puedes verla en este [link](http://localhost:3001/docs) despues de iniciar el proyecto usando el siguiente comando.

```sh
npm run dev
```

La base de datos y las tablas se crean de manera automatica siempre y cuando las variables de entorno hayan sido establaecidas previamente.

## Variables de entorno  
  
|   Nombre      |   Tipo de dato    |       Ejemplo     |
|---------------|-------------------|-------------------|
|   `NODE_ENV`  |   `String`        |   `dev`           |
|   `DB_HOST`   |   `String`        |   `localhost`     |
|   `DB_USER`   |   `String`        |   `myself`        |
|   `DB_PASS`   |   `String`        |   `Strong-pass_1` |
|   `DB_NAME`   |   `String`        |   `the_best_db`   |
|   `DB_PORT`   |   `Number`        |   `3306`          |