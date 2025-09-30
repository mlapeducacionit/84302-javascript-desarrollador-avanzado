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



console.warn('// ? getElementsByTagName() // Me retorna un colección de HTMLElement');

const todosLosTitulosH2 = document.getElementsByTagName('h2')
console.log(todosLosTitulosH2); // HTMLCollection -> se va a trabajar como si fuera un array

//console.log(todosLosTitulosH2[0])
//console.dir(todosLosTitulosH2[0])
const segundoElemento = todosLosTitulosH2[1]
console.log(segundoElemento)
segundoElemento.classList.add('color-fondo-violeta')

console.warn('// ? Métodos modernos de acceso a los elementos del DOM');
console.warn('// ? querySelector() ** // Me retorna un Nodo');
console.warn('// ? querySelectorAll() ** // Me retorno una lista de Nodos');





