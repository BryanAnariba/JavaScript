import { Router } from 'express';
import { readdirSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const PATH_ROUTES = dirname(fileURLToPath(import.meta.url));
const router = Router();

console.clear();

const cleanName = ( fileName ) => {
    return fileName.split( '.' ).shift();
}

readdirSync( PATH_ROUTES ).filter((fileName) => {
    const fileNameWithoutExt = cleanName( fileName );
    if ( fileNameWithoutExt !== 'index' ) {
        console.log( `Route Loaded: ${ fileNameWithoutExt }` );
        import( `./${ fileNameWithoutExt }.js` )
        .then((moduleRouter) => {
            router.use( `/${ fileNameWithoutExt }`, moduleRouter.router );
        });
    }
});

export default router;