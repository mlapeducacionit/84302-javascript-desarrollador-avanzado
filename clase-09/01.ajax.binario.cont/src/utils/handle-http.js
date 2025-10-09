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

       /*  if ( options.body instanceof File) {
            const data = await res.blob()
        } else {
            const data = await res.json()
        } */
        const data = await res.text()
        
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
