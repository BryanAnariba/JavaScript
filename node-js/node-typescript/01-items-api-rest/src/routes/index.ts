import { Router } from 'express';
import { readdirSync } from 'fs';
const PATH_ROUTES = `${ __dirname }`;
const router: Router = Router();

console.clear();

const cleanName = ( fileName: string ): string => {
    return `${ fileName.split( '.' ).shift() }`;
}

readdirSync( PATH_ROUTES ).filter(( fileName ) => {
    const route = cleanName( fileName );
    console.log({ route: route });
    if ( route !== 'index' ) {
        import( `./${ route }` )
        .then((moduleRouter) => {
            router.use( `/${ route }`, moduleRouter.router );
        });
    }
});

export default router;
