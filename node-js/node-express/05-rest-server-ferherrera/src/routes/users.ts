import {  Router } from 'express';
import { check } from 'express-validator';

import { createOne, deleteOne, editOne, findAll, findOne } from '../controllers/user';
import { validateJWT } from '../middlewares/jwt.validate.handle';
import { validateRoles } from '../middlewares/role.validate.handle';
//import { isAdminRole } from '../middlewares/role.validate.handle';
import { validationHandle } from '../middlewares/validation.handle';
import { existsEmail, isValidRole, findUserById } from '../utils/validations.handle';

const router: Router = Router();

router.get( '', findAll ); 

router.get( '/:userId', findOne );

router.post( 
    '', 
    [ 
        check( 'userEmail', 'Email is not valid' ).isEmail(),
        check( 'userEmail' ).custom( ( userEmail ) => existsEmail( userEmail ) ),
        check( 'userRole' ).custom( ( role ) => isValidRole( role ) ),
        check( 'userName', 'User Name is Required' ).not().isEmpty(), 
        check( 'userLastName', 'User Last Name is Required' ).not().isEmpty(),
        check( 'userPassword', 'Password Length should be six characters min' ).isLength({ min: 6 }),
        validationHandle,
    ],
    createOne 
);

//  RUTA PROTEGIDA USUARIO LOGUEADO
router.put( 
    '/:userId', 
    [
        validateJWT,
        validateRoles( 'ADMIN', 'SALES' ),
        //isAdminRole, // OJO ESTO SOLO ES VALIDO PARA SOLO ADMINS, PERO A VESES AY MAS ROLES QUE TIENEN PERMISO
        check( 'userId', 'Invalid User Id' ).isMongoId(),
        check( 'userId' ).custom( ( userId ) => findUserById( userId ) ),
        check( 'userRole' ).custom( ( role ) => isValidRole( role ) ),
        validationHandle,
    ],
    editOne 
);

//  RUTA PROTEGIDA USUARIO LOGUEADO
router.delete( 
    '/:userId', 
    [
        validateJWT,
        validateRoles( 'ADMIN', 'SALES' ),
        //isAdminRole, // OJO ESTO SOLO ES VALIDO PARA SOLO ADMINS, PERO A VESES AY MAS ROLES QUE TIENEN PERMISO
        check( 'userId', 'Invalid User Id' ).isMongoId(),
        check( 'userId' ).custom( ( userId ) => findUserById( userId ) ),
        validationHandle,
    ],
    deleteOne 
);

export { router };