import './style.css'
import handleHttp from './utils/handle-http'

/* -------------------------------------------- */
console.warn('/* Comunicación asincrónica con AJAX */')
/* -------------------------------------------- */

/* --------------------------------------------------- */
/* Comunicación asincrónica con AJAX                   */
/* AJAX: Asyncronous JavaScript and XML                */
/* Un objeto llama XMLHttpRequest (Con eso trabajamos) */
/* --------------------------------------------------- */

// ----> 

// ! XML (Archivo de texto plano)
// * Nos permite transmitir información de manera estandar y liviana del backend al frontend por ejemplo

// https://es.wikipedia.org/wiki/Extensible_Markup_Language

// ! JSON (Archivo de texto plano)
// * JavaScript Object Notation
// * Nos permite transmitir información de manera estandar y liviano del backend al frontend por ejemplo

// https://es.wikipedia.org/wiki/JSON

// ! PROTOCOLO HTTP

// https://reparartuordenador.com/como-funciona-el-protocolo-http

// ! Métodos (verbos) HTTP

// Además de los métodos disponibles en los formularios (GET y POST)
// ABM (acronimo) -> ALTA, BAJA, MODIFICACIÓN
// CRUD (acronimo) -> C:CREATE | R:READ | U:UPDATE | D:DELETE
// M.HTTP ->          POST     | GET    | PUT      | DELETE

// https://developer.mozilla.org/es/docs/Web/HTTP/Methods

// https://www.atatus.com/glossary/content/images/2021/07/CRUD.jpeg

// ! Status HTTP
// Es la respuesta que nos va a entregar el backend. El resultado de la comunicación.

// * Respuesta informativas (100-199)
// * Respuesta satisfactorias (200-299)
// * Redirecciones (300-399)
// * Errores de clientes (400-499)
// * y errores de los servidores (500-599)

// https://developer.mozilla.org/es/docs/Web/HTTP/Status
// https://http.cat/
// https://httpstatusdogs.com/
// https://www.youtube.com/shorts/TtYLv8COtJk

// ! Headers HTTP
// Dentro del protocolo HTTP los archivos va a tener una cabecera de petición y una cabecera de respuesta

// https://developer.mozilla.org/es/docs/Web/HTTP/Headers

// API Productos

// GET -> CRUD -> R:READ -> http://localhost:8080/productos
// POST -> CRUD -> C:CREATE -> http://localhost:8080/productos + el nuevo producto
// PUT -> CRUD -> U:UPDATE -> http://localhost:8080/productos/id + el producto editado
// DELETE -> CRUD -> D:DELETE -> http://localhost:8080/productos/id

// ! Secuencial -> Sincronico - bloqueante
/* console.log('Inicio')
for (let index = 0; index < 1e10; index++) { } // 10.000.000.000
console.log('Fin') */

// Hilos de procesamiento. 

// ! No Secuencial -> Asincronicos -> No bloqueante

/* console.log("Inicio"); */

// BOM -> API del Navegador
/* setTimeout(() => {
  console.log("Tarea Asíncrona"); // Esta tarea asincronica se ejecuta en otro hilo (Como si fuera en otro hilo)
}, 8000); */

// setTimeout(cb, mili)

/* console.log("Fin"); */

/* Para resolver la situación que tenemos con Javascript vamos a utilizar las API WEB */

/* WEB API -> dentro del objeto window (XMLHttpRequest) -> callbacks -> axios */
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest_API

// ----> Callback Hell -> Piramide de la perdición.

/* WEB API -> dentro del objeto window (fetch) -> Promise -> promesas -> azucar sintactica */
// https://developer.mozilla.org/es/docs/Web/API/Fetch_API

// Promesas (Promises)

// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises

/* -------------------------------------------- */
console.warn('/* Promesas */')
/* -------------------------------------------- */
/* 
Una promesa es un objeto que representa un valor que puede estar disponible ahora, en el futuro o nunca. 
*/ 

// Una promesa tiene tres estados:

// 1. Pendiente (pending): está en proceso.
// 2. Se cumplió (fulfilled): se resolvió exitosamente.
// 3. No se Cumplió -> Rechazada (rejected): ocurrió un error.
// ---------------------------
// Promise(cb) <--- una función ejecutada pasada como argumento de otra
// resolve y reject son referencias de funciones
// resolve -> Se usa cuando quiero que se cumpla la promesa
// reject -> Se usa cuando quiero que no se cumpla promesa


//const miPromesa = new Promise(() => {})

// ! Promesa que siempre se cumple
/* const miPromesa = new Promise((resolve, reject) => {
   // Al resolve le puedo pasar lo que yo quiera. String, Number, Boolean, Object, Array
    resolve('Se cumplió') // Gracias a que uso el resolve, la promesa siempre se va a cumplir
}) */

// ! Promesa que nunca se cumple
/* const miPromesa = new Promise((resolve, reject) => {
    // Al resolve le puedo pasar lo que yo quiera. String, Number, Boolean, Object, Array
    reject('No se cumplió') // Nunca se va cumplir
}) */

const miPromesa = new Promise((resolve, reject) => {
  const fueAlCumple = true // flag o bandera

  if (fueAlCumple) {
    resolve('Todo salio bien -> Se cumplió')
  } else {
    reject('Algo salió mal -> No se cumplió')
  }
})

// console.log(miPromesa)
//                    'Luis' , true
/* function vinoAlCumple(persona, vino) {

    const miPromesa = new Promise((resolve, reject) => {

      if ( vino ) {
        const obj = { nombre: persona, mensaje: 'Vino a mi cumple (Cumplió)' }
        resolve(obj)
      } else {
        const obj = { nombre: persona, mensaje: 'No vino a mi cumple (No Cumplió)'}
        reject(obj)
      }

    })

    return miPromesa

}

// const promesaDevuelta = vinoAlCumple('Luis', true)
const promesaDevuelta = vinoAlCumple('Ana', false)
console.log(promesaDevuelta) */

function vinoAlCumple(persona, vino) {

    const miPromesa = new Promise((resolve, reject) => {

      setTimeout(() => {
        if ( vino ) {
          const obj = { nombre: persona, mensaje: 'Vino a mi cumple (Cumplió)' }
          resolve(obj)
        } else {
          const obj = { nombre: persona, mensaje: 'No vino a mi cumple (No Cumplió)'}
          reject(obj)
        }
      }, 5000);

    })

    return miPromesa

}

//const promesaDevuelta = vinoAlCumple('Luis', true)
//const promesaDevuelta = vinoAlCumple('Ana', false)
//console.log(promesaDevuelta)

// !! Como gestionar el resultado que nos entrega una promesa
// Encadenamiento de funciones -> Channing
/* promesaDevuelta
  .then((data) => { // then() ---> resolve()
    console.log('THEN:', data) // data -> { nombre: persona, mensaje: 'Vino a mi cumple (Cumplió)' }
  })
  .catch((error) => { // catch() ---> reject()
    console.log('CATCH:', error)
  })
  .finally(() => {
    console.log('FINALLY', 'Siempre se ejecuta (FIN)')
  })
 */

// setInterval(): Se va ejecutar algo cada cierto tiempo. window.setInternal() <---- BOM
//             (callback, tiempo-milisegundos)
// setInterval(() => {}, interval);
/* setInterval(() => {
  console.log('Me ejecuto cada 2 segundos')
  console.log(new Date());
}, 2000); */ // 1 seg -> 1000 milisegundos

// setTimeout(): Se va a ejecutar algo luego de cierto tiempo. window.setTimeout() <---- BOM
//          callback, tiempo-milisegundos
//setTimeout(() => {}, timeout);
/* setTimeout(() => {
  console.log('Pasaron 5 segundos')
}, 5000); // 5 seg -> 5000 milisegundos -> 5000 milis */

// * clearInterval | clearTimeout | interrumpen el setInterval y setTimeout

// ! fetch: Me permite hacer peticiones asincronicas con JS
// https://developer.mozilla.org/es/docs/Web/API/Fetch_API
// Endpoint -> http://localhost:8080/productos/

// ! GET ALL -> TODOS LOS PRODUCTOS

const getAll = () => {
  const promesaFetch = fetch('http://localhost:8080/productos/')

  console.log(promesaFetch)

  promesaFetch
    .then((data) => {
      console.log(data) // <--- esto es lo que nos devolvió el fetch <--- en el caso de que la promesa se cumple
      const promesa = data.json() // <--- Objeto que representa una respuesta HTTP
      return promesa
    }) // Promesa se cumple
    .then((productos) => {
      console.log(productos)
    })
    .catch((error) => {
      console.error(error)
    }) // Promesa no se cumple
}

// getAll()

// ! GET ONE -> UN SOLO PRODUCTO
// Variables de entorno -> https://vite.dev/guide/env-and-mode
const url = import.meta.env.VITE_ENDPOINT_PRODUCTOS 
console.log(url)

const getOne = (url, id) => {

  const urlUnProducto = url + id
  //console.log(urlUnProducto)

  const objPromesa = fetch(urlUnProducto) // Es una promesa que me devuelve el objeto response

  objPromesa
    /* .then((res) => {
      //console.log(res)
      // Cualquier cosa que haga que vos tengas una promesa dentro del then() va necesario que en ese retornes.
      const promesaJSON = res.json()
      return promesaJSON
    }) */
    .then((res) => res.json())
    .then((producto) => {
      console.log(producto) // Voy a tener el producto con id 3
    })
    .catch((err) => {
      console.error(err)
    })

}

// getOne(url, 3)

// Variables de entorno

// CRUD 
const urlUsuarios = import.meta.env.VITE_ENDPOINT_USUARIOS

// C:CREATE

const createUser = (url, nuevoUsuario) => {

  //console.log(url)
  //console.log(nuevoUsuario)

  // Objeto de configuración de la petición
  const options = {
    method: 'POST', // Por defecto es GET
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(nuevoUsuario) // convertir un obj de js en un string (Lo necestia el protocolo http)
  }

  const promesaRespuesta = fetch(url, options) // por defecto fetch hace peticiones con el verbo GET

  promesaRespuesta
    .then((res)=> {

      if ( !res.ok ) {
        throw new Error('Ocurrió un error')
      }

      const promesaJSON = res.json()
      return promesaJSON
    })
    .then((data)=> {
      console.log(data) // Producto creado con ID -> EL ID LO CREA EL BACKEND
    })
    .catch((err)=> {
      console.error(err)
    })

}

const objNuevoUsuario = { 
  nombre: "Pedro Sanchez", 
  email: "pedro.sanchez@example.com" 
}

//createUser(urlUsuarios, objNuevoUsuario)

// R:READ

console.log(urlUsuarios)

const getOneUser = (url, id) => {

  //console.log(url)
  //console.log(id)
  const urlUnUsuario = url + id
  console.log(urlUnUsuario);

  const respuestaPromesa = fetch(urlUnUsuario)

  //console.log(respuestaPromesa) // pedding
  respuestaPromesa
    .then((res) => {
      //console.log(res)
      if( !res.ok ) {
        //console.log('Salió todo mal')
        //return Promise.reject('Error: Algo salió mal')
        throw new Error('No se pudo cargar (Creando error)')
      } 
      //debugger
      console.log(res)
      const promesaJSON = res.json()
      return promesaJSON
    })
    .then(data => {
      console.log(data) // El producto con el ID -> 4
    })
    .catch((err) => {
      console.log(err);
    })

}

//getOneUser(urlUsuarios, 4)

// ! U:UPDATE

const updateUser = (url, usuarioPorEditar, id) => {

  const options = {
    method: 'PUT',
    headers: { 'content-type' : 'application/json' },
    body: JSON.stringify(usuarioPorEditar) // obj de js a string
  }

  const urlEdicion = url + id
  console.log(urlEdicion)
  const usuarioEditado = fetch(urlEdicion, options)

  usuarioEditado
    .then(res => {
      if( !res.ok ) {
        throw new Error('No se pudo editar el usuario')
      }
      const promesaJson = res.json()
      return promesaJson  

    })
    .then(data => {
      console.log(data)
    })
    .catch( err => {
      console.error(err)
    })


} 
const usuario = { id: 5, nombre: 'Otro nombre editado', email: 'editado@gmail.com'}
const editarUsuario = document.getElementById('editar-usuario')

editarUsuario.addEventListener('click', () => {
  updateUser(urlUsuarios, usuario, usuario.id)
})


// ! D:DELETE
// http://localhost:8080/usuarios/id <---- cual elemento quiero eliminar

const deleteUser = (url, id) => {
  // console.log(url);
  // console.log(id)

  const urlEliminacionUsuario = url + id
  console.log(urlEliminacionUsuario)

  const options = {
    method: 'DELETE' // Por defecto fetch hace peticiones GET
  }

  const promesaPeticion = fetch(urlEliminacionUsuario, options)

  promesaPeticion
    .then((res) => {

      if ( !res.ok ) {
        throw new Error('No se pudo borrar el usuario')
      }

      const promesaJSON = res.json()
      return promesaJSON

    })
    .then((usuarioEliminado) => {
      console.log(usuarioEliminado);
    })
    .catch((err) => {
      console.error(err);
    })

}

const eliminarUsuario = document.querySelector('#eliminar-usuario')

eliminarUsuario.addEventListener('click', () => {
  deleteUser(urlUsuarios, 3)
})



// ! Async/Await // <----- palabras reservadas del lenguaje
// ES8 aparece esta azucar sintantica que nos permite escribir la gestión de las promesas de otra manera, más sencilla y en forma secuencial.

// ! GET ONE

const getOneUserAsync = async (url, id) => {

 try {

    const urlUnUsuario = url + id
    console.log(urlUnUsuario);

    const res = await fetch(urlUnUsuario)
    console.log(res)

    if ( !res.ok ) {
      //console.log('Salió todo mal')
      //return Promise.reject('Error: Algo salió mal')
      throw new Error('No se pudo cargar (Creando error)')
    } 

    const data = await res.json()

    console.log(data) // Un usuario
  
 } catch (error) {
    console.error(error)
 }

}


// ! GET ALL (Todos los usuarios)

const getAllUsersAsync = async (url) => {
 try {

   console.log(url)

  const res = await fetch(url)
  console.log(res)

  if ( !res.ok ) {
    throw new Error('No se pudo obtener todos los productos')
  }

  const todosLosUsuarios = await res.json()
  console.log(todosLosUsuarios)
  
 } catch (error) {
  console.error(error)
 }


}

//getAllUsersAsync(urlUsuarios)

const createUserThenCatch = (url, nuevoUsuario) => {

  //console.log(url)
  //console.log(nuevoUsuario)

  // Objeto de configuración de la petición
  const options = {
    method: 'POST', // Por defecto es GET
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(nuevoUsuario) // convertir un obj de js en un string (Lo necestia el protocolo http)
  }

  const promesaRespuesta = fetch(url, options) // por defecto fetch hace peticiones con el verbo GET

  promesaRespuesta
    .then((res)=> {

      if ( !res.ok ) {
        throw new Error('Ocurrió un error')
      }

      const promesaJSON = res.json()
      return promesaJSON
    })
    .then((data)=> {
      console.log(data) // Producto creado con ID -> EL ID LO CREA EL BACKEND
    })
    .catch((err)=> {
      console.error(err)
    })

}

const createUserAsync = async (url, nuevoUsuario) => {

 try {

   const options = {
    method: 'POST', 
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(nuevoUsuario) 
  }

  const res = await fetch(url, options) 
  console.log(res)

  if ( !res.ok ) {
    throw new Error('No se pudo crear el usuario')
  }

  const data = await res.json()
  console.log(data)

 } catch (error) {
  console.error(error)
 }

}

// createUserAsync(urlUsuarios, objNuevoUsuario)

const deleteUserAsync = async (url, id) => {

  try {
    const urlFinal = url + id
    console.log(urlFinal)

    const options = {
      method: 'DELETE'
    }

    const res = await fetch(urlFinal, options)
    console.log(res)

    if ( !res.ok ) {
      throw new Error('No se pudo eliminar el usuario')
    }

    const usuarioEliminado = await res.json()
    console.log(usuarioEliminado)
  } catch (error) {
    console.error(error)
  }

}

// deleteUserAsync(url, 4)


const updateUserAsync = async (url, usuarioPorEditar, id) => {

 try {

   const options = {
    method: 'PUT',
    headers: { 'content-type' : 'application/json' },
    body: JSON.stringify(usuarioPorEditar) // obj de js a string
  }

  const urlEdicion = url + id
  console.log(urlEdicion)


  const res = await fetch(urlEdicion, options)

  if ( !res.ok ) {
    throw new Error('No se pudo editar el usuario')
  }

  const usuarioEditado = await res.json()
  console.log(usuarioEditado)

  
 } catch (error) {
  console.error(error)
 }

} 

const editarUsuarioAsync = document.getElementById('editar-usuario')

editarUsuarioAsync.addEventListener('click', () => {
  updateUser(urlUsuarios, usuario, usuario.id)
})


// ! try/catch
// Es un bloque de código en el cual lo que queremos ejecutar como parte de nuestra aplicación podría llegar a fallar, entonces necesitamos alguna manera para estar cubierto por futuros errores

/* try { // Probar ---> Ejecutar
  // Paso 1 
  // Paso 2 
  // Paso 3 // <-------------------------
  // Paso 4 
  
} catch (error) {
  console.error(error)
} */


console.log(handleHttp)


const urlSimpsons = 'https://thesimpsonsapi.com/api/characters/1'

const peticionAHomero = async () => {

  try {
    const personajeHomero = await handleHttp(urlSimpsons)
    console.log(personajeHomero);
  } catch (error) {
    console.error(error);
  }

}

// peticionAHomero()

const createProducto = async () => {

  try {

    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/json'},
      body: JSON.stringify({ nombre: 'PC Gamer', precio: 123 })
    }

    const productoCreado = await handleHttp(url, options) 
    console.log(productoCreado)
  } catch (error) {
    console.error(error);
  }
}


//createProducto()












