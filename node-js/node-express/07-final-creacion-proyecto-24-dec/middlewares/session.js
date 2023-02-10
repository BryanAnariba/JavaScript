const { request, response } = require("express");
const { usersModel } = require("../models");
const { errorHandle } = require("../utils/error.handle");
const { verifyToken } = require("../utils/jwt.handle");

const getProperties = require( '../utils/handleEngineProperties' );
const propertiesKey = getProperties();

const authMiddleware = async ( req = request, res = response, next ) => {
    try {

        if ( !req.headers.authorization ) {
            throw new Error( `Token Not Provided` );
        }

        const token = req.headers.authorization.split( ' ' ).pop();
        //console.log({ token });
        const tokenData = verifyToken( token );

        if ( !tokenData ) {
            throw new Error( `Invalid Token: Not Found` );
        }

        //console.log({ _id: tokenData._id });
        if ( !tokenData._id ) {
            throw new Error( `Invalid Token: userId not found` );
        }

        //  SI PASO TODAS LAS VALIDACIONES NEXt
        const query = {
            [propertiesKey.id]: tokenData[propertiesKey.id],
        }
        const user = await usersModel.findOne(query);
        //console.log( user );
        user.set( 'password', undefined, { strict: false } );
        req.user = user;
        next();
    } catch ( err ) {
        errorHandle( res, 401, 'HTTP_AUTHORIZATION_ERROR', err.message );
    }
}

module.exports = {
    authMiddleware,
};