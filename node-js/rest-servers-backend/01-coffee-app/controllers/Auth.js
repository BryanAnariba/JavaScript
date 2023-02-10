const { validationResult } = require("express-validator");
const { getUserByEmail, createUser } = require("../services/users.service");
const { encryptPassword } = require("../utils/bcrypt.handle");
const { errorHandle } = require("../utils/error.handle");

const createItem = async ( req = request, res = response ) => {
    try {
        const { completeName, email, password, role } = req.body;


        // TODO: primero verificamos el usuario
        const existsUser = await getUserByEmail( email );
        if ( existsUser ) {
            throw new Error( `The user ${ email } already exists.` );
        }

        const encryptPwd = await encryptPassword( password );
        const userResponse = await createUser({
            completeName: completeName,
            email: email,
            password: encryptPwd,
            role: role
        });

        userResponse.set( 'password', undefined, { strict: false } );
        return res.status( 201 ).json({
            statusCode: 201,
            data: { 
                user: userResponse,
                token: null
            }
        });
    } catch ( error ) {
        errorHandle( res, 400, 'HTTP_AUTH_SIGNUP_ERROR', error.message );
    }
}


module.exports = {
    createItem,
}