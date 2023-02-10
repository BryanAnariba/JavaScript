// Infierno de usar callbacks

const usuarios = [
    {
        id: 1,
        nombre: 'Bryan'
    },
    {
        id: 2,
        nombre: 'Ariel'
    }
];

const salarios = [
    {
        id: 1,
        salario: 3500
    },
    {
        id: 2,
        salario: 8000
    }
];


const getSalario = ( id, callback ) => {

    // Ultimo en emascript ? si existe que solo me de el salario, sino que no pase
    const salario = salarios.find( s => s.id === id )?.salario;
    if ( salario ) {
        return callback( null, salario );
    } else {
        return callback( `No existe el usuario con el id ${ id } por ende no se le puede obtener su salario` )
    }
}

const getEmpleado = ( id, callback ) => {
    const empleado = usuarios.find( e => e.id === id )?.nombre;

    if ( empleado ) {
        return callback( null, empleado );
    } else {
        return callback( `El empleado con el id ${ id } no existe` );
    }
}

getEmpleado( 1, ( err, empleado ) => {
    if ( err ) {
        console.log( err );
    } else {
        console.log( empleado );
        getSalario( 1, ( err, salario ) => {
            if ( err ) {
                console.log( err );
            } else {
                console.log( 'Empleado ' + empleado + ', Salario ' + salario );
            }
        }); 
    }
});


