//const { argv } = require('process');
const argv = require('./config/yargs');
const { Multiplica } = require( './helpers/Multiplicar' );

//const numero = 3;
// Recogiendo los parametros de la console => node app --base=1
// const [ ,,arg3 = 1 ] = process.argv;
// const [ ,base ] = arg3.split( '=' )
//console.log( 'Base mandada desde la consola => ' + base );

Multiplica( argv.b, argv.l, argv.h )
.then( success => console.log( success ) )
.catch( err => console.log( err ) );


// node app --help


// Como usar => node app --base=10 --listar=true --hasta=20


    









