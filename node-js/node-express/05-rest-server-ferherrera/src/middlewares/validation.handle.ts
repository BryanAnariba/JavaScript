import { NextFunction, Response, Request } from 'express';
import { validationResult } from 'express-validator';
import { handleHttp } from '../utils/error.handle';

export const validationHandle = ( req: Request, res: Response, next: NextFunction ) => {
    const errors = validationResult( req );
    if ( !errors.isEmpty() ) {
        return handleHttp( 400, res, 'HTTP_CREATE_USER_ERROR', errors );   
    }

    next();
}

