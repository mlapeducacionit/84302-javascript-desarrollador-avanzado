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





console.warn("// ! CONST (ES6)");
/* Me permite construir cajitas que NO PUEDO modificar más adelante */


