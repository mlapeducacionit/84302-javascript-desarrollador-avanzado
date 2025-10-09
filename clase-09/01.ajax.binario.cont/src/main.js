import './style.css'
import handleHttp from './utils/handle-http'

const formuContacto = document.getElementById('formu-contacto')
console.log(formuContacto) // representación
console.dir(formuContacto) // radiografía de la variable

formuContacto.addEventListener('submit', async (e) => {
    e.preventDefault() // detener el comportamiento por defecto del formulario.
    
    /* const nameNombre = formuContacto[0].name
    const valueNombre = formuContacto[0].value

    console.log(nameNombre) // la variable
    console.log(valueNombre) // lo que escribio el usuario

    const nameApellido = formuContacto[1].name
    const valueApellido = formuContacto[1].value

    console.log(nameApellido)
    console.log(valueApellido)

    const dataObtenida = {
        [nameNombre]: valueNombre,
        [nameApellido]: valueApellido
    }

    console.log(dataObtenida) */

    // ! Otra manera de gestionar

    console.log(e.target) // nodo del etiqueta form

    console.log(e.target[0].name) // name del nombre
    console.log(e.target[0].value) // value del nombre
    console.log(e.target[1].name) // name del apellido
    console.log(e.target[1].value) // value del apellido

    // desestructuración de objetos con alias
    const { name: nameNombre, value: valueNombre } = e.target[0]
    const { name: nameApellido, value: valueApellido } = e.target[1]

    const dataObtenida = {
        [nameNombre]: valueNombre,
        [nameApellido]: valueApellido
    }

    console.log(dataObtenida)

    const url = 'http://localhost:8080/datos-contacto/'

    try {

         const options = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(dataObtenida)
        }

        const respuestaServidor = await handleHttp(url, options)
        console.log(respuestaServidor)
        
    } catch (error) {
        console.error(error)
    }
   
    // ! desestructuración de objetos

    const desestructuracion = () => {
        const persona = {
            nombre: 'Luis',
            apellido: 'Gutierrez'
        }

        const persona2 = {
            nombre: 'Nadia',
            apellido: 'Gomez'
        }

        console.log(persona)
        console.log(persona2)

        const nombrePersona = persona.nombre
        console.log(nombrePersona) // 'Luis'

        // Desestructuración de objetos ( A partir de las keys desestructuro )

        // const {key1, key2, key3} = objeto // ! <-------- sintaxis para desestructurar
        const { nombre, apellido } = persona
        console.log(nombre) // 'Luis'
        console.log(apellido) // 'Gutierrez'

        const { nombre: nombre2, apellido: apellido2 } = persona2
        console.log(nombre2)
        console.log(apellido2)
    }

    //desestructuracion()    

    // ! formData <--- Dentro el BOM y me permite trabajar clave/valor.

    const dataFormulario = new FormData(e.target)

    console.dir(dataFormulario)

   /*  console.log(dataFormulario.get('nombre'))
    console.log(dataFormulario.get('apellido')) */

    /*  dataFormulario.forEach((value, key) => {
        console.log(key);
        console.log(value);
    })  */

    /* const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(dataFormulario)
    } */

    const options = {
        method: 'POST',
        body: dataFormulario
    }

    const dataRecibida = await handleHttp(url, options)

    console.log(dataRecibida); // json con la información recibida y el id


})


const formuUpload = document.getElementById('formu-upload')
console.log(formuUpload);

formuUpload.addEventListener('submit', async (e) => {
    e.preventDefault()

    const inputArchivo = document.querySelector('#lbl-file')
    const previ = document.querySelector('#previsualizacion')

    //console.log(inputArchivo);
    //console.log(previ);

    //console.dir(inputArchivo);

    const archivo = inputArchivo.files[0]

    const formData = new FormData()
    // key: value
    //                 key   ,  value
    formData.append('archivo', archivo) // Es de tipo File
    // BOM -> Browser Object Model
    // https://developer.mozilla.org/es/docs/Web/API/File

    //console.log(formData.get('archivo'))
    //console.log(formData.entries());
    //console.log(formData.entries().next());
    //const datos = Object.fromEntries(formData.entries()) // transforma el array devuelto por el iterador a un obj de js
    //console.log(datos)

    // ! Petición asincronica

    const url = 'http://localhost:8080/subida-archivos/'

    const options = {
        method: 'POST',
        body: formData
    }
    
    const respuestaServer = await handleHttp(url, options)

    console.log(respuestaServer)

    const imagen = document.createElement('img')
    imagen.src = respuestaServer

    previ.appendChild(imagen)
 
    formuUpload.reset() // reseteamos el formulario

})

const formuCloud = document.querySelector('#formu-cloudinary')

formuCloud.addEventListener('submit', async e => {
    e.preventDefault()

    const inputArchivo = document.querySelector('#lbl-archivo-cloud')
    const previ = document.querySelector('#previsualizacion')
    console.log(inputArchivo);
    console.log(previ);

    // console.dir(inputArchivo.files[0])
    // Desestructuración de arrays
    //         0
    const [ archivo ] = inputArchivo.files
    console.warn(archivo)

    const formData = new FormData()

    formData.append('file', archivo)

    // ! ---------------- Subiendo a cloudinary
    const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET
    const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME
    //console.log(UPLOAD_PRESET)
    //console.log(CLOUD_NAME)

    formData.append('upload_preset', UPLOAD_PRESET)

    /* formData.forEach((value, key) => {
        console.log(`${key}: ${value}`)
    }) */



})