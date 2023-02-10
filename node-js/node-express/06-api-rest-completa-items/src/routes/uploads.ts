import { Router } from 'express';
import { getFile } from '../controllers/upload';
import { multerMiddleware } from '../middlewares/multer.middleware';
import { checkJWT } from '../middlewares/session';

const router: Router = Router();

router.post( 
    '', 
    [
        checkJWT,
        multerMiddleware.single( 'file' )
    ], 
    getFile );

export { router };