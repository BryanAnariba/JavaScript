import { Router } from "express";
import { readdirSync } from 'fs';

const router: Router = Router();
const PATH_ROUTES = `${ __dirname }`;

const nameWithOutExt = ( fileName: string ) => {
    return fileName.split( '.' )[0];
}

readdirSync( PATH_ROUTES ).filter(( fileName ) => {
    const cleanName = nameWithOutExt( fileName );
    if ( cleanName !== 'index' ) {
        import( `./${ cleanName }` )
        .then(( module ) => {
            router.use( `/api/${ cleanName }`, module.router );
        });;
    }
});

export {
    router as indexRoutes
}