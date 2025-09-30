import './style.css'

const producto1 = { id: 1, nombre: 'Notebook', precio: 1200, img: 'https://placehold.co/400' } // objeto
const producto2 = { id: 2, nombre: 'PC', precio: 900, img: 'https://placehold.co/400' } // objeto
const producto3 = { id: 3, nombre: 'Auriculares', precio: 200, img: 'https://placehold.co/400'} // objeto
const producto4 = { id: 4, nombre: 'Mouse', precio: 100, img: 'https://placehold.co/400' }
const producto5 = { id: 5, nombre: 'Monitor', precio: 300, img: 'https://placehold.co/400' }

// array de objetos (productos)
const productos = [producto1, producto2, producto3, producto4, producto5] // array

console.log(productos)

const startAnterior = () => {
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
}

const start = () => {

    const contenedor = document.getElementById('contenedor')

    if ( contenedor ) {
        console.warn('OK');
    }

    productos.forEach(producto => {
    // console.log(producto);

        // ! Creamos un elemnto dinamicamente
        const card = document.createElement('div')
        // console.log(card); // <div></div>
        // ! Agregamos al div una clase
        card.classList.add('card')

        // ! Creamos elementos dinamicamente
        const imagen = document.createElement('img')
        const titulo = document.createElement('h3')
        const precio = document.createElement('p')
        const boton = document.createElement('button')

        // ! Agregamos el contenido
        imagen.src = producto.img
        imagen.alt = producto.nombre
        titulo.textContent = producto.nombre
        precio.textContent = `Precio: $${producto.precio}`
        boton.classList.add('btn')
        boton.textContent = 'Agregar'

        // ! Agregamos los nodos a la card
        card.appendChild(imagen)
        card.appendChild(titulo)
        card.appendChild(precio)
        card.appendChild(boton)

        // ! Agregamos al contenedor cada una de las card
        contenedor.appendChild(card)

    })
}


// Es un evento que el avisa a JS que está todo el documento html listo.
document.addEventListener('DOMContentLoaded', start)


