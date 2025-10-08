import './style.css'

const formuContacto = document.getElementById('formu-contacto')
console.log(formuContacto) // representación
console.dir(formuContacto) // radiografía de la variable

formuContacto.addEventListener('submit', (e) => {
    e.preventDefault() // detener el comportamiento por defecto del formulario.
    
    /* const nameNombre = formuContacto[0].name
    const valueNombre = formuContacto[0].value

    console.log(nameNombre) // la variable
    console.log(valueNombre) // lo que escribio el usuario

    const nameApellido = formuContacto[1].name
    const valueApellido = formuContacto[1].value

    console.log(nameApellido)
    console.log(valueApellido)

    const dataObtenida = {
        [nameNombre]: valueNombre,
        [nameApellido]: valueApellido
    }

    console.log(dataObtenida) */

    // ! Otra manera de gestionar

    console.log(e.target) // nodo del etiqueta form

    console.log(e.target[0].name) // name del nombre
    console.log(e.target[0].value) // value del nombre
    console.log(e.target[1].name) // name del apellido
    console.log(e.target[1].value) // value del apellido

    // desestructuración de objetos con alias
    const { name: nameNombre, value: valueNombre } = e.target[0]
    const { name: nameApellido, value: valueApellido } = e.target[1]

    const dataObtenida = {
        [nameNombre]: valueNombre,
        [nameApellido]: valueApellido
    }

    console.log(dataObtenida)

    // desestructuración de objetos

    const persona = {
        nombre: 'Luis',
        apellido: 'Gutierrez'
    }

    const persona2 = {
        nombre: 'Nadia',
        apellido: 'Gomez'
    }

    console.log(persona)
    console.log(persona2)

    const nombrePersona = persona.nombre
    console.log(nombrePersona) // 'Luis'

    // Desestructuración de objetos ( A partir de las keys desestructuro )

    // const {key1, key2, key3} = objeto // ! <-------- sintaxis para desestructurar
    const { nombre, apellido } = persona
    console.log(nombredafdfads) // 'Luis'
    console.log(apellido) // 'Gutierrez'

    const { nombre: nombre2, apellido: apellido2 } = persona2
    console.log(nombre2)
    console.log(apellido2)

})
