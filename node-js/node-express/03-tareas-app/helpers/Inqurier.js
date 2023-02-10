require( 'colors' );
const inquirer = require( 'inquirer' );

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [ 
            {
                value: '1',
                name: `${ '1'.yellow } - Crear Tarea`
            },
            {
                value: '2',
                name: `${ '2'.yellow } - Listar Tareas`
            },
            {
                value: '3',
                name: `${ '3'.yellow } - Listar Tareas Completadas`
            },
            {
                value: '4',
                name: `${ '4'.yellow } - Listar Tareas Pendietes`
            },
            {
                value: '5',
                name: `${ '5'.yellow } - Completar Tareas`
            },
            {
                value: '6',
                name: `${ '6'.yellow } - Borrar Tarea`
            },
            {
                value: '0',
                name: `${ '0'.yellow } - Salir`
            },
        ]
    }
];

// Para hacer un menu mas personalizado
const inquierMenu = async () => {
    console.clear();
    console.log( '====================================='.green );
    console.log( '       Seleccione una Opcion         '.yellow );
    console.log( '====================================='.green );
    
    // la desestructuracion opcion viene de name: 'opcion', por ende debe llamarse igual
    const { opcion } = await inquirer.prompt( preguntas );
    return opcion;
}

const inquierMenuPusa = async () => {
    const { opcion } = await inquirer.prompt({
        type: 'input',
        name: 'opcion',
        message: `\nPresione ${ 'ENTER'.green } para continuar\n`,
        //choices: []
    });
    return opcion;
}

const introducientoDatosPorConsola = async ( message ) => {
    const question = [{
        type: 'input',
        name: 'datosPorConsola',
        message,
        validate( value ) {
            if ( value.length === 0 ) {
                return 'Por favor ingrese un valor;'
            }
            return true;
        }
    }];

    const { datosPorConsola } = await inquirer.prompt( question );
    return datosPorConsola;
} 

module.exports = {
    inquierMenu,
    inquierMenuPusa,
    introducientoDatosPorConsola,
}