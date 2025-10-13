import './style.css'


const inputUpload = document.querySelector('#lbl-upload')
const divDrop = document.querySelector('#drop')

console.log(inputUpload);
console.log(divDrop);


const colocarImagenDentroFormData = (objImagen) => {

    const formData = new FormData()
    formData.append('file', objImagen)

    return formData
}

const handleHttp = (data) => {
    // Hago la petición
}

inputUpload.addEventListener('change', (e) => {
    console.dir(e.target.files[0]);

    // Colocar la imagen dentro de el formData

    const archivo = e.target.files[0]

    const formData = colocarImagenDentroFormData(archivo)

    // Subida -----> HTTP https://cloudinary.com/

    handleHttp(formData)

})

const body = document.querySelector('body')

const elementos = [divDrop, body]



elementos.forEach((el) => {
    el.addEventListener('dragenter', (e) => {
        e.preventDefault()
    })

    el.addEventListener('dragleave', (e) => {
        e.preventDefault()
    })

    el.addEventListener('dragover', (e) => {
        e.preventDefault()
    })


    el.addEventListener('drop', (e) => {
        e.preventDefault()
        // ¿Quiero saber si tengo en el -> body o divDrop
        
        if ( el.id === 'drop' ) {
            console.log('--------> Soltaron en el div')
            console.dir(e)
            console.log(e.dataTransfer.files)
            console.log(e.dataTransfer.files[0])

             // Colocar la imagen dentro de el formData

            const archivo = e.dataTransfer.files[0]

            const formData = colocarImagenDentroFormData(archivo)

            // Subida del archivo

            handleHttp(formData)
        } 
    })
})


