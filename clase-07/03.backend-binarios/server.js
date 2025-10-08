import express from 'express' // ES6
import multer from 'multer'
import path from 'node:path'
import { v4 as uuidv4 } from 'uuid';
import 'dotenv/config'

// ! Configuraciones
const app = express()
const PORT = process.env.PORT


// ! 1. Configuración de multer (Donde se guardar el recurso y el nombre del recurso)
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        // https://nodejs.org/api/path.html
        cb(null, path.join('tmp', 'mis-uploads'))
        //cb(null, './tmp/mis-uploads')
    },
    filename: function(req, file, cb) {
        console.log(file)
        // cb(null, file.originalname) // Nombre original...
        //console.log(`${Date.now()}-${file.originalname}`)
        // cb(null, `${Date.now()}-${file.originalname}`) // Nombre original...
        console.log(file.mimetype.split('/'))
        const extension = file.mimetype.split('/')[1] // pdf, jpeg...
        // https://developer.mozilla.org/es/docs/Web/HTTP/Basics_of_HTTP/MIME_types
        cb(null, `${uuidv4()}.${extension}`)
    }
})

console.log(uuidv4())
// ! 2. Basado en la configuración anterior creo el middleware
const upload = multer({ storage }) // ES6 => storage: storage => storage
// Dentro de upload voy a tener el middleware para utilizarlo en la ruta que quiera.

// ! Middlewares de aplicación (No vamos a utilizar multer acá como un middleware para todas las rutas.)

// ! Rutas

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// ! Middleware a nivel de direccionador
// 'archivo' hace referencia al name del input donde se cargue la imagen
app.post('/subida-archivos', upload.single('archivo'), (req, res) => {
    res.send('Todo piola, archivo subido')
})


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})