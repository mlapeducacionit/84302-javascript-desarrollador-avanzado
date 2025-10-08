import './style.css'

const formuContacto = document.getElementById('formu-contacto')
console.log(formuContacto) // representación
console.dir(formuContacto) // radiografía de la variable

formuContacto.addEventListener('submit', (e) => {
    e.preventDefault() // detener el comportamiento por defecto del formulario.

    const nameNombre = formuContacto[0].name
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

    console.log(dataObtenida)

})
