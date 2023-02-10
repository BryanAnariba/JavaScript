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

const main = async () => {
    try {
        const nombreEmpleado = await getEmpleado( 3 );
        const salarioEmpleado = await getSalario( 3 );

        return `Nombre Empleado: ${ nombreEmpleado }, Salario Empleado: ${ salarioEmpleado }`;
    } catch ( err ) {
        throw err;
    }
}

main()
.then( infoUsuario => console.log( infoUsuario ) )
.catch( err => console.log( err ) );