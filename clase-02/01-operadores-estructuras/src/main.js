import './style.css'

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

console.warn('-------------------------------------------------')
console.warn('-------------------------------------------------')
console.warn('-------------------------------------------------')

console.warn('Repaso método forEach()')

const arrayAnimales = ['Gatos', 'Perros', 'Cabras', 'Horneros', 'Ornitorrincos', 'Mapaches', 'Gallinas']
console.log(arrayAnimales)

arrayAnimales.forEach((animal) => {
    console.log(animal)
})
// setencia1; setencia2; sentencia3
// let i = 0; i < arrayAnimales.length; i++
// 1. let i = 0 (Una sola vez)
// 2. i < arrayAnimales.length (Se controla)
// 3. Ingresa al bloque de código
// 4. Se incrementa
// 5. Se vuelve a controlar
// 6. Ingresa al bloque de código

for (let i = 0; i < arrayAnimales.length; i++) {
    //debugger
    console.log(arrayAnimales[i])
}

console.warn('// map(): El map recorre los elementos del array y modifica su valores creando resultado otro array de la misma dimensión')

const arrayNumeros = [7, 10, 15, 2, 5, 13, 29]
console.log(arrayNumeros)

let multiplicadoX2 = arrayNumeros.map((num) => {
    // debugger
    return num * 2
})
console.log(multiplicadoX2)

console.warn('// filter(): Filtra los elementos de un array y crea como resultado otro array con los elementos filtrados.')

const pares = arrayNumeros.filter((num) => {
    if ( num % 2 === 0 ) {
        return num
    }
})

console.log(pares)

/* let impares = arrayNumeros.filter((num) => {
    if ( num % 2 !== 0 ) {
        return num
    }
}) */
// Simplificando
let impares = arrayNumeros.filter((num) => num % 2 !== 0)

console.log(impares)


console.warn('Repaso Arrow function')

// Funciones tradicionales 
function restarOtraManera(n1, n2) {
    console.log(n1-n2)
}

restarOtraManera(8, 2)

let restar = function(n1, n2) {
    console.log(n1-n2)
}

restar(4, 1)

// Funciones Flecha
/* let restarArrow = (n1, n2) => {
    console.log(n1-n2)
} */
// Simplificando la función arrow
let restarArrow = (n1, n2) => console.log(n1-n2)
restarArrow(67, 5)

/* let multiplicarArrow = (n1, n2, n3) => {
    return n1 * n2 * n3
} */
//let multiplicarArrow = (n1, n2, n3) => n1 * n2 * n3
let multiplicarArrow = (n1, n2, n3) => {
    let res = n1 * n2 * n3 
    return res
}

const resultadoMulti = multiplicarArrow(3, 5, 7)
console.log(resultadoMulti)

let saludarPorNombre = nombre => {
    console.log('Bienvenido', nombre)
}

saludarPorNombre('Maxi')

let darLaBienvenido = _ => {
    console.log('Hola a todos!')
}

darLaBienvenido()

console.warn('// slice(): Extrae una copia de una parte de un array en nuevo array')

let flores = ['Danelion', 'Rosa', 'Girasol', 'Margarita', 'Petunia', 'Violeta', 'Tupilán', 'Clavel', 'Cala']

console.log(flores)
//                      inicio, fin
let dosFlores = flores.slice(2, 4)
console.log(dosFlores)

console.warn('// splice(): Agrega o elimina elementos en una posición especifica')
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// ? Eliminando
//let elementosEliminados = flores.splice(2, 1)
let elementosEliminados = flores.splice(2, 3)
console.log(flores)
console.log(elementosEliminados); // ['Girasol', 'Margarita', 'Petunia']

// ? Remplazar
let borroDanelion = flores.splice(0, 1, 'Lirio', 'Geranio')
console.log(borroDanelion);
console.log(flores)

console.warn('// sort(). Orden alos elementos alfabeticamente')

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
let arrayLetras = ['A', 'D', 'Z', 'G', 'M']
let arrayNumeritos =  [33, 55, 22, 11, 27, 34]

console.log(arrayNumeritos)
let funcionOrdenamiento = (a, b) => {
    //console.log(a-b) // a es más chico que b (-1) | a es más grande b (1)
    return a - b
}

let ordenadoNumeritos = arrayNumeritos.sort(funcionOrdenamiento)
console.log(ordenadoNumeritos);

let ordenandoLetras = arrayLetras.sort()
console.log(ordenandoLetras)

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

const PI = 3.141592
// PI = 5555 // Una vez definida la constante no se puede modificar

// ! CONSTRUCTORES

/* 
constructor  | var    |   let     |   const
alcance      | global |   local   |   local
redeclarable | si     |   no      |   no
redefinible  | si     |   si      |   no
*/

// ! Alcance
/* if ( true ) {
    let nombre = 'Maxi'
    console.log(nombre) // local, existe
}
console.log(nombre) // global, no */

let datos
console.log(datos) // tipo undefined
// redefino datos
datos = 12313

let letra = 'D' // declarando y definiendo
letra = 'D' // redefino

// ! NO USAR VARRRRRRRRRRRRRRRRRRR
variable = 2
console.log(variable);
var variable = 3
console.log(variable);
var variable = 5
console.log(variable);

console.warn('// ! Operadores aritmeticos');
// TEMPLATE STRING (Templates literales) -> ` <--- backtick <--- ALT + 96


console.warn('// ! + ');
console.log(`La suma de 4 más 2 es igual a: ${4 + 2}`)
console.warn('// ! - ');
console.log(`La resta de 5 menos 3 es igual a ${5 - 3}`)
console.warn('// ! * ');
console.log(`La multiplicaicón de 8 por 3 es igual a ${8*3}`)
console.warn('// ! /');
console.log(`La división de 8 divido 2 es igual a ${8/2}`)
console.warn('// ! %');
console.log(`El módulo de 12 sobre 2 es igual a ${8%2}`)
console.warn('// ! **');
console.log(`La potenciación de 2 divido 5 es igual a ${2**5}`)
console.warn('// ! ++');
let numero = 8
console.log(`El incremento de 8 es ${++numero} preincremento`) // incrementa y luego muestra
let otroNumero = 3
console.log(`El predecremento de 3 es ${--otroNumero} predecremento`) // decrementa y luego muestra

let numeroPost = 12
let numeroIncrementando = numeroPost++
// debugger
console.log(`El incremento de 12 es ${numeroIncrementando} preincremento`) 
let otroNumeroPost = 22
let numeroDecrementado = otroNumeroPost--
console.log(`El decremento de 22 es ${numeroDecrementado} predecremento`) 

console.warn('// ! Operadores de comparación');

console.warn('// ! =='); // Solo compara valores
console.log( 8 == '8') // true
console.warn('// ! ==='); // Siempre usar los estrictos
console.log( 8 === '8') // false (Compara valores y tipo de dato)
console.warn('// ! !=');  // Solo compara valores
console.log( 8 != '8') // false
console.warn('// ! !=='); // Siempre usar los estrictos
console.log( 8 !== '8') // true (Compara valores y tipo de dato)
console.warn('// ! <');
console.log( 8 < 2) // false
console.warn('// ! <=');
console.log( 8 <= 8) // true
console.warn('// ! >');
console.log( 8 > 10) // false
console.warn('// ! >=');
console.log( 8 >= 10) // false

// ! Operadores lógicos (Short circuit operators)

console.warn('// ! AND -> &&');
//           p    y   q
console.log(true && true) // ! true (En y lógico, si ambas son verdaderas el resultado es verdadero)
console.log(true && false) // false
console.log(false && true) // false
console.log(false && false) // false

console.warn('// ! OR -> ||');

console.log(true || true) // true
console.log(true || false) // true
console.log(false || true) // true
console.log(false || false) // ! false (Solo en el caso que ambos sean falsos va a resultar falso)

console.warn('// ! NOT -> ! ');

console.log(!true) // false
console.log(!!true) // true
console.log(!false) // true
console.log(!!false) // false

console.warn('BOM -> Browser Object Model'); // Objeto que representa las caracteristicas del Navegador

console.log(window)

console.warn('DOM -> Document Object Model'); // Objeto que representa la caracteristicas del HTML

console.log(window.document) // representación
console.dir(window.document) // sacar radiografía

// ! Accedo absoluto a un elemento de DOM

console.log(document.children[0].children[1].children[0]) // h1

// ! Métodos clasicos de acceso a los elementos del DOM
console.warn('// ? getElementById() // Me retorna un HTMLElement');
console.warn('// ? getElementsByClassName() // Me retorna una colección de HTMLElement');
console.warn('// ? getElementsByTagName() // Me retorna un colección de HTMLElement');

console.warn('// ? Métodos modernos de acceso a los elementos del DOM');
console.warn('// ? querySelector() // Me retorna un Nodo');
console.warn('// ? querySelectorAll() // Me retorno una lista de Nodos');





