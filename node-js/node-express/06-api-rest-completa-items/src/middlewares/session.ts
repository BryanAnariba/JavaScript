import { NextFunction, Response } from "express";
import { IRequestExtend } from "../interfaces/IRequestExtend";
import { verifyToken } from "../utils/jwt.handle";

const checkJWT = ( req: IRequestExtend, res: Response, next: NextFunction ) => {
    try {
        const jwt = req.headers.authorization || '';
        const token = jwt.split( ' ' ).pop(); // se puede split( ' ' )[1]
        const isUser = verifyToken( `${ token }` ) as { id: string };
        if ( !isUser ) {
            return res.status( 401 ).json({ status: 401, data: 'Unauthorized Request: Necesitas un token valido' });
        } else {
            req.user = isUser;
            next();
        }
    } catch ( e ) {
        console.log(e);
        return res.status( 401 ).json({ status: 401, data: 'Unauthorized Request: Necesitas un token valido' });
    }
}

export {
    checkJWT,
}