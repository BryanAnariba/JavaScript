const { readdirSync } = require( 'fs' );
const { Router } = require( 'express' );

const ROUTES_PATH = `${ __dirname }`;
const router = Router();
console.clear();

const cleanFileName = ( fileName ) => {
    return fileName.split( '.' ).shift(); // auth.js => [ auth, js ] => auth
}

readdirSync( ROUTES_PATH ).filter(( fileName ) => {
    const fileNameWithOutExt = cleanFileName( fileName );
    if ( fileNameWithOutExt !== 'index' ) {
        console.log( `Loaded: ${ fileNameWithOutExt }`.magenta );
        router.use( `/${ fileNameWithOutExt }`, require( `./${ fileNameWithOutExt }` ) );
    }
});

module.exports = {
    endPoints: router
}