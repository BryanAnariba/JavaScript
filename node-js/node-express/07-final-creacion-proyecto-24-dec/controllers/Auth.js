const { request, response } = require("express");
const { matchedData } = require("express-validator");
const { usersModel } = require("../models");
const { getUserByEmail } = require("../services/user.service");
const { errorHandle } = require("../utils/error.handle");
const { signToken } = require("../utils/jwt.handle");
const { encryptPassword, comparePasswords } = require("../utils/password.handle");

const logIn = async ( req = request, res = response ) => {
    try {
        req = matchedData( req );
        
        // VERIFICAMOS EXISTENCIA DE USUARIO
        const user = await usersModel.findOne({ email: req.email });
        if ( !user ) {
            return errorHandle( res, 404, 'HTTP_REGISTER_ERROR', `Incorrect Credentials: ${ req.email } does not exists` );
        }

        // COMPARAMOS PASSWORDS
        const isMatchPassword = await comparePasswords( req.password, user.password );
        if ( !isMatchPassword ) {
            return errorHandle( res, 404, 'HTTP_REGISTER_ERROR', `Incorrect Credentials: Password Do not match` );
        }

        user.set( 'password', undefined, { strict: false } );

        return res.status( 200 ).json({ 
            statusCode: 200, 
            data: {
                user: user,
                token: await signToken( user )
            }
        });
    } catch ( error ) {
        errorHandle( res, 500, 'HTTP_LOGIN_ERROR', error.message );
    }
}

const signUp = async ( req = request, res = response  ) => {
    try {

        // TODO: tomamos lma data limpiada
        const data = matchedData( req );

        // TODO: VERIFICAMOS EXISTENCIA DE USUARIO
        const exitstUser = await getUserByEmail( data.email );
        //console.log({ exitstUser });

        if ( exitstUser.length > 0 ) {
            throw new Error( `The user with email: ${ data.email } already exists` );
        }

        const passwordHashed = await encryptPassword( data.password );
        const user = { ...data, password: passwordHashed };
        const response = await usersModel.create( user );
        response.set( 'password', undefined, { strict: false } );

        return res.status( 201 ).json({ statusCode: 201, data: {
            user: response,
            token: await signToken( response ) 
        }});

    } catch ( error ) {
        errorHandle( res, 500, 'HTTP_REGISTER_ERROR', error.message );
    }
}

module.exports = {
    logIn,
    signUp,
}