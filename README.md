# Bootcamp KeepCoding

## Módulo: Frontend con JavaScript

Este repositorio contiene la solución al proyecto propuesto en este módulo, que consiste en la creación de una aplicación web para un servicio de venta y búsqueda de artículos de segunda mano, que llamaremos **Ballapop**.

## Contenido

El repositorio contiene el proyecto desarrollado con vanilla JavaScript, utilizando [Bootstrap](https://getbootstrap.com/) para la estructura y los estilos básicos.

El proyecto es netamente el frontend de la aplicación. Para el backend se utilizó [Sparrest.js](https://github.com/kasappeal/sparrest.js).

## Instalación

Basta con clonar el repositorio y alojar los archivos en algún servidor web.

También se deberá clonar el repositorio de Sparrest.js.

## Development

Para correr la aplicación web en un entorno de desarrollo, en primer lugar se deberá iniciar Sparrest.js. Las instrucciones para su instalación y puesta en marcha se encuentran en su [repositorio](https://github.com/kasappeal/sparrest.js).

Para el db.json que se solicita en el primer paso, se debe usar el proporcionado en este repositorio. La estructura del db.json utilizado es la siguiente:

```json
{
  "ads": [
    {
      "name": "",
      "description": "",
      "image": "",
      "price": "0.0",
      "sale": true,
      "userId": 1,
      "updatedAt": "",
      "id": 1
    }
  ]
}
```

Habiendo creado el archivo db.json y después de haber instalado las dependencias en Sparrest.js con `npm install`, se deberá encender el servidor con `npm start`.

La aplicación Sparrest.js corre en [http://localhost:8000/](http://localhost:8000/).

Para visualizar Ballapop en el localhost, se puede usar la extensión Live Server en VS Code. Normalmente, la aplicación corre en [http://127.0.0.1:5500/](http://127.0.0.1:5500/).
