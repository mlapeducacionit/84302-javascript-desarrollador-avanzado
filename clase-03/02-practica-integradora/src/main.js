import './style.css'

const producto1 = { id: 1, nombre: 'Notebook', precio: 1200, img: 'https://placehold.co/400' } // objeto
const producto2 = { id: 2, nombre: 'PC', precio: 900, img: 'https://placehold.co/400' } // objeto
const producto3 = { id: 3, nombre: 'Auriculares', precio: 200, img: 'https://placehold.co/400'} // objeto
const producto4 = { id: 4, nombre: 'Mouse', precio: 100, img: 'https://placehold.co/400' }
const producto5 = { id: 5, nombre: 'Monitor', precio: 300, img: 'https://placehold.co/400' }

// array de objetos (productos)
const productos = [producto1, producto2, producto3, producto4, producto5] // array

console.log(productos)

/* const obj = {
    // clave : valor
    // key : value
    id: 5, 
    nombre: 'Monitor',
    precio: 300, 
    img: 'https://placehold.co/400'
} */

// Recorro el array de objetos y voy mostrar objeto por objeto
// https://developer.mozilla.org/en-US/docs/Web/API/console/table_static
for (const producto of productos) {
    console.log(producto);
    // De cada producto, extraigo cada clave
    for (const clave in producto) {       
        console.log(clave, ' : ', producto[clave]);
    }
}

const contenedor = document.getElementById('contenedor')

if ( contenedor ) {
    console.warn('OK');
}

productos.forEach(producto => {
  console.log(producto);

  // ! Creamos un elemnto dinamicamente
  const card = document.createElement('div')
  // console.log(card); // <div></div>
  // ! Agregamos al div una clase
  card.classList.add('card')

  // ! Inyectamos dentro de la card el contenido

  card.innerHTML = `
    <img src="${producto.img}" alt="${producto.nombre}">
    <h3>${producto.nombre}</h3>
    <p>Precio: $${producto.precio}</p>
    <button class="btn">Agregar</button>
  `
  //console.log(card)

  // ! Agregamos al contenedor cada una de las card
  contenedor.appendChild(card)



})
