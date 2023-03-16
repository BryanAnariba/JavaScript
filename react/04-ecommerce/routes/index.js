const { Router } = require('express');
const { readdirSync } = require( 'fs' );
const PATH_ROUTES = `${ __dirname }`;
const router = Router();

console.clear();

const cleanFileName = ( fileName ) => {
    // users.js => [ users, js ] => shift = users, pop = js
    return fileName.split( '.' ).shift();
}

readdirSync( PATH_ROUTES ).filter( fileName => {
    const nameWithoutExt = cleanFileName( fileName );
    if ( nameWithoutExt !== 'index' ) {
        console.log( { route: nameWithoutExt } );
        router.use( `/${ nameWithoutExt }`, require( `./${ nameWithoutExt }.js` ) );
    }
});

module.exports = router;

