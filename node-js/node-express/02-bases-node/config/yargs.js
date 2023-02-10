// Recogiendo los parametros de la console => node app --base=1 pero con yargs
const argv = require( 'yargs' )
.option( 
    'b', {
        alias: 'base', // Nombre b igual a base
        type: 'number',
        describe: 'Es la base del numero a sacar la tabla de multiplicar',
        demandOption: true
})
.option(
    'l', {
        alias: 'listar',
        type: 'Boolean',
        describe: 'Desea listar la informacion, muestra la tabla en consola',
        demandOption: false,
        default: false
    }
)
.option(
    'h', {
        alias: 'hasta',
        type: 'number',
        describe: 'Hasta que numero desea la tabla de multiplicar',
        default: 10
    }
)
.check((argv, options) => {
    if ( isNaN( argv.b ) ) {
        throw 'Obligatoriamente necesita que la base sea un numero';
    }
    if ( isNaN( argv.h ) ) {
        throw 'Obligatoriamente necesita que la base sea un numero';
    }
    // // LLamamos a la funcion que multiplica y genera el archivo txt
    //return `Base = ${ argv.b }, limite ${ argv.l }`;
    return true;
})
.argv;

module.exports = argv;