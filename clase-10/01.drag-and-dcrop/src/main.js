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

const handleHttp = async (options, url) => {
    try {
        const res = await fetch(url, options)
        if( !res.ok ) {
            throw new Error('No se pudo hacer la petición')
        }
        if ( contentType.includes('application/json') ) {
            console.log('Se recibió un json');
            data = await res.json()
        } else if ( contentType.includes('text/') ){
            console.log('Se recibió texto');
            data = await res.text()
        } else{
            console.log('Se recibió otro tipo');
            data = await res.blob()
        }
        return data
    } catch (error) {
        console.log(error);
    }
}

inputUpload.addEventListener('change', async (e) => {
    console.dir(e.target.files[0]);

    // Colocar la imagen dentro de el formData

    const archivo = e.target.files[0]

    const formData = colocarImagenDentroFormData(archivo)

    // Subida -----> HTTP https://cloudinary.com/

    const options = {
        method: 'POST',
        body: formData
    }
    
    const url = import.meta.env.VITE_URL_CLOUD

    try {
        const rutaALaImagen = await handleHttp(options, url)
        console.log(rutaALaImagen.secure_url)
    } catch (error) {
        console.error(error)
    }


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


