import './style.css'

console.warn('BOM -> Browser Object Model'); // Objeto que representa las caracteristicas del Navegador

console.log(window)

console.warn('DOM -> Document Object Model'); // Objeto que representa la caracteristicas del HTML

console.log(window.document) // representación
console.dir(window.document) // sacar radiografía

// ! Accedo absoluto a un elemento de DOM

console.log(document.children[0].children[1].children[0]) // h1

// ! Métodos clasicos de acceso a los elementos del DOM
console.warn('// ? getElementById() ** // Me retorna un HTMLElement');

const textoSecundario = document.getElementById('texto-secundario')
// console.log(textoSecundario)
console.dir(textoSecundario)
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy

//textoSecundario.style.backgroundColor = 'crimson'

textoSecundario.classList.add('color-fondo-violeta')

if ( textoSecundario ) { // true
    // debugger
    console.log('Está seleccionado correctamente');
} else {
    // debugger
    console.error('Todo mal...')
}

console.warn('// ? getElementsByClassName() // Me retorna una colección de HTMLElement');

const itemBorde = document.getElementsByClassName('item-borde')
console.log(itemBorde); // HTMLCollection

const array = ['pink', 'crimson', 'blueviolet']

/*
! No funciona según lo esperado 
for (let i = 0; i < itemBorde.length; i++) {
    debugger
    //itemBorde[i].style.backgroundColor = array[i]
    itemBorde[i].classList.remove('item-borde')
} */

console.warn('// ? getElementsByTagName() // Me retorna un colección de HTMLElement');

const todosLosTitulosH2 = document.getElementsByTagName('h2')
console.log(todosLosTitulosH2); // HTMLCollection -> se va a trabajar como si fuera un array

//console.log(todosLosTitulosH2[0])
//console.dir(todosLosTitulosH2[0])
const segundoElemento = todosLosTitulosH2[1]
console.log(segundoElemento)
segundoElemento.classList.add('color-fondo-violeta')

console.warn('// ? Métodos modernos de acceso a los elementos del DOM');
// ! IMPORTANTE: Uso selectores CSS.
console.warn('// ? querySelector() ** // Me retorna un Nodo');
// * Me devuelve siempre un nodo html. El primero

const etiquetaNivel3 = document.querySelector('h3')
console.log(etiquetaNivel3)

const textoUnicio = document.querySelector('#texto-unico')
console.log(textoUnicio)

console.warn('// ? querySelectorAll() ** // Me retorno una lista de Nodos');
// * Me devuelve siempre un lista de Node. NodeList -> se va a trabajar como si fuera un array

const etiquetaNivel4 = document.querySelectorAll('.texto-poco-importante')
console.log(etiquetaNivel4)

console.warn('// ! Estructuras de iteracción')

// * continue y break
// continue -> empezar desde el principio
// break -> detener el blucle antes de terminar

// for

/* for (let i = 0; i < array.length; i++) {
    
}  */

// while
let i = 0

// Muestra solo los impares

while ( i < 50 ) {
    //debugger
    i++
    if ( i % 2 === 0 ) continue

    if ( i === 21 ) {
        console.log('Encontré el 21');
        break
    }

    console.log(i)
}

console.warn('// do while')

let h = 3

do {
    //debugger
    console.log('Aunque sea una vez va a ejecutar el bloque de do while')
    h++
} while (h <= 3);

console.warn('// ! for in');
// Me permite recorrer propiedades de objetos

const persona = { nombre: 'Maxi', edad: 22, rol: 'Docente' }

for (const clave in persona) {
    //console.log(clave, ':', persona.clave) // Notación punto (dot notation)
    console.log(clave, ':', persona[clave]) // Notación corchete (bracket notation)
}

console.warn('// for of')
// Se usa para recorrer los iterables -> * arrays / strings, sets, maps

const numeros = [10, 20, 30, 40, 50]

for (const valor of numeros) {
    console.log("Valor: ", valor);
}

// forEach (array)
// map (array)




