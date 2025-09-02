(() => {

    // función para obtener información de una película por Id
    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getCastById( castId: string ) {
        console.log({ castId });
    }

    // funcion para obtener el bio del actor por el id
    function getActprBioById( actorId: string ) {
        console.log({ actorId });
    }
    
    // Crear una película}
    interface Movie {
        cast: string[];
        description: string;
        rating: number;
        title: string;
    }
    function createMovie( {title, description, rating, cast}: Movie ) {
        console.log({ title, description, rating, cast });  
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor', fullName, birthdate);
        return true;        

    }
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        let result: number;
            if ( isDead ) {
                result = 1500;
            }
            if ( isSeparated ) {
                result = 2500;
            }
            return isRetired ? 3000 : 4000;
        }
})();