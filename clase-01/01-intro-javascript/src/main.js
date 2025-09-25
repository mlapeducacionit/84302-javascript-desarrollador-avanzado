import './style.css'

console.warn('// ! Mensajes en consola')

console.log("Nivel informativo")
console.warn("Nivel de precaución")
console.error("Nivel de error critico") // nivel se rompió

console.warn("// ! Constructor de variables ");

console.warn("// ! VAR (NO USAR)");
console.warn("// ! LET (ES6)");
/* Me permite construir cajitas que puedo modificar más adelante */

let palabra = 'Hola' // cadena (String)
console.log(palabra);
let nombre = "Maxi" // cadena (String)
console.log(nombre);
let isActivo = true // Boleano (Boolean)
console.log(isActivo);
let numeroSinDecimal = 22 // Numero (Number) // camelCase
console.log(numeroSinDecimal);
let numeroConDecimal = 33.22 // Numero (Number) // camelCase
console.log(numeroConDecimal);

console.log('<h1 class="texto-grande texto-rojo">Introducción a Javascript</h1>');

// ! Objeto literal

let objeto = {
    /* clave: valor */
    /* key: value */
    nombre: 'Maxi',
    apellido: 'Principe',
    edad: 22,
    isTeacher: true,
    saludar: function() { // No se recomienda trabajar con arrow function dentro de los objetos
        console.log('Hola soy', this.nombre)
    } 
}


console.warn('// ! Arrays (Arreglos o Vectores)');
// Estructura de datos indexada. Tienen un identificador único por el elementos. Empieza por 0. Tienen una dimensión (Cantidad de elementos dentro)

let arrayFrutas = ['Manzana', 'Pera', 'Kiwi', 'Banana', 'Naranja', 'Frutilla' , 'Melon', 'Cerezas', 'Frutas de Dragón', 'Uva', 'Zandía', 'Durazno', 'Mango']

let arrayFrutasFaltantes = ['Mora', 'Melocotón', 'Limón', 'Mandarina', 'Arandano', 'Kinoto', 'Anana']

console.log(arrayFrutas);
console.log(arrayFrutas[0]); // Accedo al primer elemento (Manzana)
console.log(arrayFrutas[arrayFrutas.length-1]) // Accedo al último elemento
console.log(arrayFrutas.at(-1)) // Accedo al último elemento
console.log(arrayFrutas.length);
console.log(arrayFrutasFaltantes)
console.log(arrayFrutasFaltantes[0]) // Accedo al primer elemento (Mora)
console.log(arrayFrutasFaltantes[arrayFrutas.length-1]) // Accedo al primer elemento (Mora)
console.log(arrayFrutasFaltantes.at(-1)) // Accedo al último elemento

console.log('// ! Métodos de los arrays');

console.log('// concat(): Une varios array')
let nuevoArrayFrutasTodas = arrayFrutas.concat(arrayFrutasFaltantes)
console.log(nuevoArrayFrutasTodas);

console.log('// join(): Combina los elementos de un array en una sola cadena')

let cadenaFrutas = nuevoArrayFrutasTodas.join()
console.log(cadenaFrutas);
cadenaFrutas = nuevoArrayFrutasTodas.join('%')
console.log(cadenaFrutas);

console.log('// pop(): Elimina el último elemento');

let ultimoElemento = nuevoArrayFrutasTodas.pop()
console.log(ultimoElemento);

console.log('// push(): Agrega al final un elemento');

let nuevaCantidadDeElementosDelArray = nuevoArrayFrutasTodas.push('Frambuesa', 'Granada', 'Ciruela', 'Guarana', 'Ñangapiri', 'Palta', 'Tomate')
console.log(nuevaCantidadDeElementosDelArray); // 26

console.log('// reverse(): Invierte el orden de los elementos')

let arrayInvertido = nuevoArrayFrutasTodas.reverse()
console.log(arrayInvertido);

console.log('// shift(): Eliminaga un el elemento al principio')

let elementoDelPrincipioEliminado = arrayInvertido.shift()
console.log(elementoDelPrincipioEliminado);

console.log('// unshift(): Agrega un el elemento al principio')

nuevaCantidadDeElementosDelArray = arrayInvertido.unshift('Carambola', 'Coco', 'Higo', 'Litchi', 'Papaya', 'Maracuya')
console.log(nuevaCantidadDeElementosDelArray); // 31

console.log('// forEach(): Itera sobre los elementos (recorre elementos)')
// Recorre los elementos de la array

// callback (cb): Es una función pasada como argumento de otra función
//                            ⬇️⬇️ <---- callback
//arrayInvertido.forEach(function() {})

/*
! Al no tener nombre se llama función anonima
function(fruta) {
    console.log(fruta)
}
*/

console.log(arrayInvertido);

arrayInvertido.forEach(function(fruta, indice, array) {
    console.log(fruta)
    console.log(indice)
    console.log(array);
})
console.warn('-----------------------------------------');

function callbackFuncion(item, indice, array) {
    console.log(item)
    console.log(indice)
    console.log(array);
}

arrayInvertido.forEach(callbackFuncion)

console.warn('-----------------------------------------');

let personas = ['Laura', 'Lorena', 'Claudia', 'Nadia', 'Silvia']

personas.forEach(callbackFuncion)

/* function forEach(callback) {
    // -----
    // -----
    // -----

    callback()
} */

//             ⬇️ ⬇️  <---- Parametros
/* function sumar(n1, n2) {
    return n1 + n2
}
 */
//   ⬇️ ⬇️  <---- Argumentos
/* sumar(2, 4) // Invoco, llamo, ejecuto. */



// slice(): Extrae una copia de una parte de un array en nuevo array
// splice(): Agrega o elimina elementos en una posición especifica
// sort(). Orden alos elementos alfabeticamente
// map(): El map recorre los elementos del array y modifica su valores creando resultado otro array de la misma dimensión
// filter(): Filtra los elementos de un array y crea como resultado otro array con los elementos filtrados.

console.warn("Gestión de un array como cola o pila");

// cola -> shift() y unshift()
// pila -> pop() y push()

console.warn('// Array (listas) homogeneas')

let colores = ['rojo', 'verde', 'azul', 'negro', 'lila'] // todas cadenas
let edades = [22, 33, 25, 55, 90] // todas numeros

console.warn('// Array (listas) heterogeneos [NO DEBO]');
//                0 -> nombre | 1 -> apellido | 2 -> edad | 3 -> isTeacher
// let arrayMaxi = ['Maximiliano', 'Principe', 22, true]

//let maxiNombre = 'Maximiliano'
//let maxiApellido = 'Principe'
//let maxiEdad = 22
//let maxiIsteacher = true
//let maxi = 'Maximiliano|Principe|22|true'


console.warn("// ! CONST (ES6)");
/* Me permite construir cajitas que NO PUEDO modificar más adelante */


