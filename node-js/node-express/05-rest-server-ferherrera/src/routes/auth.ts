import { Router } from 'express';
import { check } from 'express-validator';
import { logIn } from '../controllers/auth';
import { validationHandle } from '../middlewares/validation.handle';

const router: Router = Router();

router.post( 
    '/login', 
    [
        check( 'userEmail', 'Email is required' ).isEmail(),
        check( 'userPassword', 'Password is required' ).not().isEmpty(),
        validationHandle
    ],  
    logIn
);

router.post( 
    '/register',
    [

    ],
);

export {
    router,
}
