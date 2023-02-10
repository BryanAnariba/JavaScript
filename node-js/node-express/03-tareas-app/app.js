require( 'colors' );
const { inquierMenu, inquierMenuPusa, introducientoDatosPorConsola } = require('./helpers/Inqurier');
const { GuardarData, leerDB } = require('./helpers/SaveData');
const Tareas = require('./models/Tareas');

const main = async () => {
    console.clear();
    let opt = '';
    const tareas = new Tareas();
    
    // LEEMOS LA DB
    const data = leerDB();

    if ( data ) {    // MASAGEAMOS LA DATA EN UN ARRAY
        tareas.cargarTareasFromArray( data );
    }
    do {
        // opt = await MostrarMenu();
        opt = await inquierMenu()
        
        switch ( opt ) {
            case '1':
                // Creacion de la tarea
                const desc = await introducientoDatosPorConsola( 'Escribe la descripcion de la tarea' );
                // Creando la tarea
                //console.log( desc );
                tareas.crearTarea( desc );
            break;
            case '2':
                tareas.getListadoBonitoTareas();
            break;
            case '3':
                tareas.listarPendienteCompletadas( true );
            break;
            
            case '4':
                tareas.listarPendienteCompletadas( false );
            break;
        }

        //Guardando tareas
        GuardarData( tareas.listadoTareasEnArray );

        await inquierMenuPusa();
    } while ( opt !== '0' );
}

main();