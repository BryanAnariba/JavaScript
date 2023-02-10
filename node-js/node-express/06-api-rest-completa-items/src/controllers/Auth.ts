import { Request, response, Response } from "express"
import { registerNewUser, loginUser } from '../services/auth.service';
import { handleHttp } from "../utils/error.handle";
import { IAuth } from '../interfaces/IAuth';

const registerCtrl = async ( req: Request, res: Response ) => {
    
    try {
        const { body } = req;
        const responseUser = await registerNewUser( body );
        return res.status( 201 ).json({ status: 201, data: responseUser });
    } catch ( e ) {
        handleHttp( res, 'ERROR_INSERT_USER', e );
    }
}

const loginCtrl = async ( req: Request, res: Response ) => {
    try {
        const credentials: IAuth = {
            email: req.body.email,
            password: req.body.password
        }
        const responseUser = await loginUser( credentials );
        if ( responseUser === 'PASSWORD_INCORRECT' || responseUser === 'NOT_FOUND_USER') {
            return res.status( 403 ).json({
                status: 403,
                data: responseUser
            });
        } else {
            return res.status( 200 ).json({
                status: 200,
                data: responseUser
            });
        }
    } catch ( e ) {
        handleHttp( res, 'ERROR_LOGIN_USER', e );
    }
}

export {
    loginCtrl,
    registerCtrl,
}