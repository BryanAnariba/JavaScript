import { NextFunction, Response } from 'express';
import { IRequestExtend } from '../interfaces/IRequestExtend';
import { findUserById } from '../services/user.service';
import { handleHttp } from '../utils/error.handle';
import { verifyToken } from '../utils/jwt.handle';

const validateJWT = async ( req: IRequestExtend, res: Response, next: NextFunction ) => {
    const token = req.header( 'x-token' );
    //console.log( { token } );
    if ( !token )  {
        return handleHttp( 401, res, 'TOKEN_AUTHORIZATION_ERROR', 'Invalid Token: is empty.' )
    }
    try {
        const { uid } =  verifyToken( `${ token }` ) as { uid: string };
        //console.log( uid );

        // OBTENEMOS EL USUARIO LOGUEADO
        const user = await findUserById( uid );
        if ( !user ) {
            return handleHttp( 401, res, 'TOKEN_AUTHORIZATION_ERROR', 'Token is not valid - User Does not exists' );
        }

        // VERIFICAMOS SI ESTA ACTIVO
        if ( !user?.userStatus ) {
            return handleHttp( 401, res, 'TOKEN_AUTHORIZATION_ERROR', 'Token is not valid - Inactive User' );
        }

        req.user = user;
        req.uid = uid;
        next();
    } catch ( error ) {
        switch ( error ) {
            case 'JsonWebTokenError: jwt malformed':
                return handleHttp( 401, res, 'TOKEN_AUTHORIZATION_ERROR', 'Token is not valid: malformed' )
            default:
                return handleHttp( 401, res, 'TOKEN_AUTHORIZATION_ERROR', 'Token is not valid' )
        }
    }
}

export {
    validateJWT
}