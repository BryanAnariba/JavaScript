import { Router } from "express";
import { readdirSync } from 'fs';

const router: Router = Router();
const PATH_ROUTER = `${ __dirname }`;

const cleanName = ( fileName: string ): string => {
    //return fileName.split( '.' )shif();
    return fileName.split( '.' )[0];
}

readdirSync( PATH_ROUTER ).filter( fileName => {
    let routerName: string = cleanName( fileName );
    if ( routerName !== 'index' ) {
        console.log( 'Ruta Encontrada: ' + routerName );
        import ( `./${ routerName }` )
        .then(( module ) => {
            router.use( `/api/${ routerName }`, module.router );
        })
    } 
});

export {
    router
};
