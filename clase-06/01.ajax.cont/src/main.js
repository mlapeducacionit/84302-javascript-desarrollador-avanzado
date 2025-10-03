import './style.css'

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

const url = 'http://localhost:8080/productos/'

const getOne = (url, id) => {

  const urlUnProducto = url + id
  //console.log(urlUnProducto)

  const objPromesa = fetch(urlUnProducto) // Es una promesa que me devuelve el objeto response

  objPromesa
    .then((res) => {
      //console.log(res)
      const promesaJSON = res.json()
      return promesaJSON
    })
    .then((producto) => {
      console.log(producto) // Voy a tener el producto con id 3
    })
    .catch((err) => {
      console.error(err)
    })

}

getOne(url, 3)