const { inquierMenu, inquierMenuPusa } = require('./helpers/Inqurier');
const Tarea = require('./models/Tarea');
const Tareas = require('./models/Tareas');
//const { MostrarMenu, Pausa } = require('./helpers/Mensaje');

require( 'colors' );


const main = async () => {
    console.clear();
    console.log( 'Works' );
    let opt = '';
    do {
        // opt = await MostrarMenu();
        opt = await inquierMenu()
        console.log({ opt });

        // Creando una tarea
        const tareas = new Tareas();
        const tarea = new Tarea( 'Pikear a la nena' );
        console.log( tarea );

        // Anexando la tarea a listado de tareas
        tareas._listado[ tarea.id ] = tarea;
        console.log( tareas );

        await inquierMenuPusa();
        // if ( opt !== '0' ) await Pausa();
    } while ( opt !== '0' );
}

main();