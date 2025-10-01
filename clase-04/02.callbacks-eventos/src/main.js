import './style.css'

console.warn('// ! Callbacks');
// Una función que se pasa como argumento a otra función

const texto1 = () => {
    console.log("Soy el texto 1")
}

console.log(texto1); //  REFERENCIA FUNCIÓN -> Mostrando la referencia de la función.
texto1() // Ejecutando, invocando, llamando a la función

const prueba = (callback) => {
    console.log(callback) // la referencia de la función texto1
    console.log('Otra cosa')
    console.log('------')
    console.log('------')
    console.log('Otra cosa más')
    callback()
}

//prueba(texto1)

console.warn('// ! Callbacks');

