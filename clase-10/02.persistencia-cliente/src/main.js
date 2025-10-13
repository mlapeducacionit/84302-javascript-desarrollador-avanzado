import './style.css'

// LocalStorage, sessionStorage, cookies nos permiten persistir (guardar) información de nuestra aplicación en el navegador del cliente.

// localStorage y sessionStorage -> Vamos a poder guardar información, clave/valor. Cadenas de caracteres, numeros, booleanos, arrays y objetos.
// ¿Cómo se van a guardar los tipos de datos, string, number, boolean, arrays, objects? Como cadena de caracteres (strings)

console.warn('Local Storage')

console.log(window.localStorage)
console.log(localStorage)

console.warn('Session Storage')
console.log(window.sessionStorage);
console.log(sessionStorage);

console.warn('// ! Obtener una variable que esta dentro del localStorage')
console.log(window.localStorage.getItem('nombre')) // 'Maxi' 
console.log(window.localStorage.getItem('numero')) // '22'
console.log(window.localStorage.getItem('isVisited')) // 'true'
