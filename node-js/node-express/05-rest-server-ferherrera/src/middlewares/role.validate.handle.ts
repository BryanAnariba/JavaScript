import { NextFunction, Request, Response } from "express";
import { IRequestExtend } from "../interfaces/IRequestExtend";
import { handleHttp } from "../utils/error.handle";

export const isAdminRole = ( req: IRequestExtend, res: Response, next: NextFunction ) => {
    if ( !req.user )  {
        return handleHttp( 500, res, 'ERROR_ROLE_VALIDATION', 'Backend desv: OJO PRIMERO VALIDAR EL JWT PARA OBTENER EL USUARIO LOGUEADO, DESPUES DEBES PONER ESTE MIDDLEWARE SI NO HAY CLAVO' )
    }
    if ( req.user?.userRole !== 'ADMIN' ) {
        return handleHttp( 401, res, 'ROLE_PERMISION_ERROR', `User ${ req.user?.userEmail } does not have permision for this action` )
    }
    next();
}

export const validateRoles = ( ...allRoles: string[] ) => {    
    return ( req: IRequestExtend, res: Response, next: NextFunction ) => {
        const role: string = req.user?.userRole || '';
        //console.log(allRoles);
        if ( !allRoles.includes( role ) ) {
            return handleHttp( 401, res, 'ROLE_ERROR', `Do you need some of this role for this action: ${ allRoles }` )
        }
        next();
    }
}