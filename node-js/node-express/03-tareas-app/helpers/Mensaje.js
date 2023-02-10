const { resolve } = require('path');

require( 'colors' );

const MostrarMenu = () => {
    return new Promise( resolve => {
        console.clear();
        console.log( '====================================='.green );
        console.log( '       Seleccione una Opcion         '.yellow );
        console.log( '====================================='.green );
    
        console.log( `${ '1 '.yellow } - Crear Una tarea` );
        console.log( `${ '2 '.yellow } - Listar tareas` );
        console.log( `${ '3 '.yellow } - Listar tareas completadas` );
        console.log( `${ '4 '.yellow } - Listar tareas pendientes` );
        console.log( `${ '5 '.yellow } - Completar tarea(s)` );
        console.log( `${ '6 '.yellow } - Borrar tareas` );
        console.log( `${ '0 '.yellow } - Salir\n` );
    
        // Como leer lo que escribe el usuario en consola
        const readLine = require( 'readline' ).createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    
        readLine.question( 'Seleccione una opcion: ', ( response ) => {
            //console.log( { response } );
            readLine.close();
            resolve( response );
        });
    });
}

const Pausa = () => {
    return new Promise( resolve => {
        // Como leer lo que escribe el usuario en consola
        const readLine = require( 'readline' ).createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    
        readLine.question( `\nPresione ${ 'ENTER'.green } para continuar\n`, ( response ) => {
            //console.log( { response } );
            readLine.close();
            resolve();
        });
    });
}


module.exports = {
    MostrarMenu,
    Pausa
}