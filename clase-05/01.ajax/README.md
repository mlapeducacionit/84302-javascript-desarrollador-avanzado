# Incorporando JSON Server a nuestro proyecto


## Instalamos como dependencia de desarollo 

```sh
npm install json-server -D
npm install json-server --save-dev
```

## Creamos la carpeta 'data' y dentro el archivo 'db.json'
Y pegamos el json de la documentación de json-server

```json
{
  "posts": [
    { "id": "1", "title": "a title", "views": 100 },
    { "id": "2", "title": "another title", "views": 200 }
  ],
  "comments": [
    { "id": "1", "text": "a comment about post 1", "postId": "1" },
    { "id": "2", "text": "another comment about post 1", "postId": "1" }
  ],
  "profile": {
    "name": "typicode"
  }
}
```

## Agregamos en los scripts del 'package.json' lo siguiente

```json
"scripts": {
    "server": "json-server --watch data/db.json --port 8080"
}
```