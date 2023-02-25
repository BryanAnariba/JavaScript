const { readdirSync } = require( 'fs' );
const { Router } = require( 'express' );
const PATH_ROUTES = `${ __dirname }`;

const router = Router();

const cleanName = ( fileName ) => {
    return fileName.split( '.' ).shift(); // shift retorna el primero del array, pop retorna el ultimo del array
}

console.clear();

readdirSync( PATH_ROUTES ).filter(( fileName ) => {
    const fileNameWithOutExt = cleanName( fileName );
    if ( fileNameWithOutExt !== 'index' ) {
        console.log( `Route loaded: ${ fileNameWithOutExt }`.magenta );
        router.use( `/${ fileNameWithOutExt }`, require( `./${ fileNameWithOutExt }` ) );
    }
});

module.exports = router;

