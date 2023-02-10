
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


const getEmpleado = ( id ) => {
    return new Promise(( resolve, reject ) => {
        const empleado = usuarios.find( e => e.id === id )?.nombre;
        ( empleado ) ? resolve( empleado ) : reject (`No existe el empleado con el id ${ id }`);
    });
}

const getSalario = ( id ) => {
    return new Promise(( resolve, reject ) => {
        const salario = salarios.find( s => s.id === id )?.salario;
        ( salario ) ? resolve( salario  ) : reject (`No existe el empleado con el id ${ id } por ende no tiene salario`);
    });
}

getEmpleado( 1 )
.then(( empleado ) => {
    console.log( empleado );
    getSalario( 1 )
    .then( salario => console.log( salario ) )
    .catch( err => console.log( err ) ) ;
})
.catch( error => console.log( error ) );

// Promesas en cadena
let nombre;
getEmpleado( 1 )
.then( empleado => {
    nombre = empleado;
    return getSalario( 1 )
})
.then( salario => console.log( `Empleado: ${ nombre }, salario: ${ salario } ` ) )
