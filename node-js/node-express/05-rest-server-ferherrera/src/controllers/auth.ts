import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { IAuth } from '../interfaces/IAuth';
import { findUser } from "../services/user.service";
import { verifyPassword } from "../utils/bcrypt.handle";
import { generateJWT } from "../utils/jwt.handle";

const logIn = async ( req: Request, res: Response ): Promise<Response> => {
    try {
        const { userEmail, userPassword }: IAuth = req.body;

        // VERIFICAR SI EL EMAIL EXISTE
        const user = await findUser( userEmail );
        if ( !user ) {
            return handleHttp( 400, res, 'ERROR_LOGIN_USER', 'User Does not Exists.' );
        }

        // VERIFICAR SI EL USUARIO ESTA ACTIVO
        if ( !user.userStatus ) {
            return handleHttp( 400, res, 'ERROR_LOGIN_USER', 'User is not active, please comunicate with Tecnologies Department.' )
        }

        //  VERIFICAR EL PASSWORD
        const isMatchPassword: boolean = await verifyPassword( userPassword, user.userPassword );
        if ( !isMatchPassword ) {
            return handleHttp( 400, res, 'ERROR_LOGIN_USER', 'The password do not match' );
        }

        // SI LLEGAMOS AQUI CREAR EL JWT
        const token = await generateJWT( user._id );
        return res.status( 200 ).json({
            status: 200,
            data: {
                user: user,
                token: token
            }
        });
    } catch ( error ) {
        return handleHttp( 500, res, 'ERROR_LOGIN_USER', error );
    }
}

export {
    logIn,
}