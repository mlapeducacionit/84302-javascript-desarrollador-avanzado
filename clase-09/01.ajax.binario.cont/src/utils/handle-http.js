// Función handler Http
// INPUT: urlConcatenada y el objetos Options
// OUTPUT: El resultado de la petición
const handleHttp = async (urlConcatena, options = {}) => {

    //debugger

    try {

        // Fetch por defecto, hace petición GET -> 
        const res = await fetch(urlConcatena, options)

        if ( !res.ok ) {
            throw new Error('No se pudo hacer petición')
        }

        //console.log(res.headers.get('content-type')) // type/subtype
        const contentType = res.headers.get('content-type') // type/subtype

        let data = null

        if ( contentType.includes('/json') ) { // 'application/json; charset=utf-8'
            console.log('Estoy recibiendo un json') 
            data = await res.json()
        } else if ( contentType.includes('text/')) { // application/json; charset=utf-8
            console.log('Estoy recibiendo un texto');
            data = await res.text()
        } else {
            data = await res.blob()
        }
              
        //console.log(data)

        return data

    } catch (error) {
        console.error(error);
    }


}

export default handleHttp

// Modulos ESModules --> Forma moderna
// export default <---  una funcionalidad principal (Solo un export default)
// export <--- muchs funcionalides secundarias (Todos los que quiera, exports)
