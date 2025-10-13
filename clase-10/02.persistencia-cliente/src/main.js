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
console.log(window.localStorage.getItem('apellido')) // null

function getItemLS(clave) {
    return window.localStorage.getItem(clave)
}

const valorObtenido = getItemLS('nombre')
console.log(valorObtenido)

console.warn('// ! Agregar/Guardar un dato en el localStorage')
// El localStorage no puede convertir tipos de dato Objeto (Objetos, Arrays y las funciones) en strings
// ! Primitivos (si me los convierte a cadenas)
window.localStorage.setItem('mes', 'octubre')
window.localStorage.setItem('mesEnNumero', 10) // Convierte el number en string
window.localStorage.setItem('isOctober', true) // Convierte el boolean en string
// ! Tipo de dato Objeto (Arrays, Objetos y Funciones)
//window.localStorage.setItem('arreglo', [1, 2, 3, 4, 5, 6]) // !NO FUNCIONA
// * JSON.strinfy -> convierte un elemento de js a una cadena
// * JSON.parse -> convierte una cadena y un dato de tipo de js
window.localStorage.setItem('arreglo', JSON.stringify([1, 2, 3, 4, 5, 6])) // Convierto el array a una cadena
console.log(window.localStorage.getItem('arreglo'))
console.log(JSON.parse(window.localStorage.getItem('arreglo')))
// ! Objetos de js
//window.localStorage.setItem('objeto', {x: 1, y: 2, z: 3}) // ! NO funciona. [object Object]
window.localStorage.setItem('objeto', JSON.stringify({x: 1, y: 2, z: 3})) // NO funciona. [object Object]
console.log(window.localStorage.getItem('objeto')); // Me devuelve una cadena, no un objeto
console.log(JSON.parse(window.localStorage.getItem('objeto')));

function setItemLocalStorage(clave, valor) {
    //debugger
    if ( typeof valor !== 'string') {
        window.localStorage.setItem(clave, JSON.stringify(valor)) 
    } else {
         window.localStorage.setItem(clave, valor) 
    }
}

setItemLocalStorage('persona', {nombre: 'Maxi', apellido: 'Principe'})
setItemLocalStorage('palabra', 'café')
setItemLocalStorage('estaPresente', true)
setItemLocalStorage('animal', 'gato')

console.warn('// ! Eliminar una variable en el localStorage')

window.localStorage.removeItem('animal')
window.localStorage.removeItem('numero')

function deleteItemLocalStorage(clave) {
    window.localStorage.removeItem(clave)
}

deleteItemLocalStorage('estaPresente')

console.warn('------------------------ Representar todo el localStorage')
//                         ⬇️ sea un iterable
/* for (const element of window.localStorage) {
    console.log(element)
} */
//      ⬇️ forEach necesita que localStorage sea un array
/* window.localStorage.forEach(element => {
    console.log(element)
}); */

for (const key in window.localStorage) {

    // falsy y truthy
      
    if ( window.localStorage.getItem(key) ) {
        try {
            console.log(key, JSON.parse(window.localStorage.getItem(key))) // cualquier otra cosa
        } catch (error) {
            //console.error(error)
            console.log(key, window.localStorage.getItem(key)) // cadena
        }
    } 
}