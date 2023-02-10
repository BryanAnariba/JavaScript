const deadPool = {
    nombre: 'Wade',
    apellido: 'Wilson',
    poder: 'Regeneracion',
    edad: 50,
    getNombre() {
        return `${ this.nombre } ${ this.apellido } ${ this.poder }`
    }
};


console.log( deadPool.getNombre() );


// Aplicando Desestructuracion del objeto
//const { nombre, apellido, edad = 0 } = deadPool;
//console.log( `Desestructuracion => ${ nombre } ${ apellido } ${ edad }` );

function imprimeHeroe ( { nombre, apellido, edad = 0 } ) {
    console.log( `Desestructuracion => ${ nombre } ${ apellido } ${ edad }` );
}

imprimeHeroe( deadPool );

const heroes = [ 'superman', 'batman', 'aquaman', 'saitama' ];

const [ superman, , aquaman, saitama ] = heroes;

console.log( superman );
console.log( aquaman );
console.log( saitama );