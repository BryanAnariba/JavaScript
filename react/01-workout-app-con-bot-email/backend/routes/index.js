const { Router } = require( 'express' );
const { readdirSync } = require( 'fs' );
const PATH_ROUTES = `${ __dirname }`;

const router = Router();
console.clear();

const cleanName = ( fileName ) => {
    return fileName.split( '.' ).shift();
}
readdirSync( PATH_ROUTES ).filter( fileName => {
    const nameWithOutExtention = cleanName( fileName );
    if ( nameWithOutExtention !== 'index' ) {
        console.log( `Route Loaded: ${ nameWithOutExtention }`.magenta ) ;
        router.use( `/${ nameWithOutExtention }`, require( `./${ nameWithOutExtention }` ) )
    }
});

module.exports = router;



