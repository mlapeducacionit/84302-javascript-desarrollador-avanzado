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

// Pendiente (pending): está en proceso.
// Se cumplió (fulfilled): se resolvió exitosamente.
// No se Cumplió -> Rechazada (rejected): ocurrió un error.
// ---------------------------
// Promise(cb) <--- una función pasada como argumento de otra
// resolve y reject son referencias de funciones
// resolve -> Se usa cuando quiero que se cumpla la promesa
// reject -> Se usa cuando quiero que no se cumpla promesa


//const miPromesa = new Promise(() => {})

// ! Promesa que siempre se cumple
/* const miPromesa = new Promise((resolve, reject) => {
    resolve('Se cumplió') // Gracias a que uso el resolve, la promesa siempre se va a cumplir
}) */

/* // ! Promesa que siempre se cumple
const miPromesa = new Promise((resolve, reject) => {
    reject('No se cumplió') // Nunca se va cumplir
}) */

const miPromesa = new Promise((resolve, reject) => {
  const fueAlCumple = false

  if (fueAlCumple) {
    resolve('Todo salio bien -> Se cumplió')
  } else {
    reject('Algo salió mal -> No se cumplió')
  }
})

console.log(miPromesa)