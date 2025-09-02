(() => {

    // arreglo de temperaturas celsius
    // Dirección ip del servidor
    // Listado de usuarios
    // Listado de emails de los usuarios
    // Variables booleanas de un video juego
    // Otros ejerciciosloading = false;
    // Otros ejercicios
    // tiempo inicial
    //....
    // 3 doritos después
    //...
    // Tiempo al final
    // Funciones
    // Obtiene los libros
    // obtiene libros desde un URL
    // obtiene el área de un cuadrado basado en sus lados
    // imprime el trabajo


    const temperaturesCelsius = [33.6, 12.34];
    
    const serverIp = '123.123.123.123';
    
    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];
    
    const usersEmails = users.map( user => user.email );
    
    const canJump = false;
    const canRun = true;
    const hasItems = true;
    const isLoading = true;
    const startTime = new Date().getTime();
    const endTime = new Date().getTime() - startTime;


    function getBooks() {
        throw new Error('Function not implemented.');
    }

    function getBooksByUrl( url: string) {
        throw new Error('Function not implemented.');
    }
    
    function getSquareAreaFromSides( side: number ) {
        throw new Error('Function not implemented.');
    }

    function printJob() {
        throw new Error('Function not implemented.');
    }
    
    




})();
