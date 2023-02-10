const { request, response } = require("express");
const { findUserByEmail, createNewUser } = require("../services/user.service");
const { encrypt, isMatch } = require("../utils/encriptation.handle")
const { errorHandle } = require("../utils/error.handle");
const { getToken } = require("../utils/jwt.handle");

const signUp = async ( req = request, res = response ) => {
    try {
        const { name, age, email, password } = req.body;
        
        // PRIMERO BUSCAMOS EL USUARIO POR EL EMAIL A VER SI EXISTE
        const user = await findUserByEmail( email );
        if ( user ) {
            throw new Error( `The email ${ email } already rgister` );
        }

        // HASHEAMOS EL PASSWORD
        const hashedPassword = await encrypt( password );
        const newUser = { name: name, age: age, email: email, password: hashedPassword };

        // GUADAMOS
        const response = await createNewUser( newUser );
        response.set( 'password', undefined, { strict: false } );

        // CREAMOS EL TOKEN
        const token = getToken( response );

        // RETORNAMOS INFORMACION AL USUARIO
        return res.status( 201 ).send({ statusCode: 201, data: { user: response, token: token }});
    } catch ( ex ) {
        errorHandle( res, 500, 'HTTP_AUTH_REGISTER_ERROR', ex.message );
    }
}


const logIn = async ( req = request, res  = response ) => {
    try {
        const { email, password } = req.body;
        // PRIMERO VERIFICAMOS LA EXISTENCIA DEL USUARIO
        const user = await findUserByEmail( email );
        if ( !user ) {
            throw new Error( `The email ${ email } is not registered` );
        }

        // SEGUNDO COMPARAMOS EL PASSWORD PLANO CON EL ENCRIPTADO
        const isMatchPasswords =  await isMatch( password, user.password );
        if ( !isMatchPasswords ) {
            throw new Error( `Incorrect Password` );
        }

        // TERCERO CREAMOS EL TOKEN
        const token = getToken( user );

        // RESPONDEMOS
        return res.status( 200 ).json({ statusCode: 200, data: {
            user: user.set( 'password', undefined, { strict: false } ),
            token: token
        }});
    } catch ( ex ) {
        errorHandle( res, 500, 'HTTP_AUTH_LOGIN_ERROR', ex.message );
    }
}

module.exports = {
    signUp,
    logIn,
}
