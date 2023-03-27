const { request, response } = require('express');
const jwt = require( 'jsonwebtoken' );
const { errorHandle } = require('../utils/errorHandle');
const { verifyToken } = require('../utils/jwtHandle');

const isAuthenticated = async ( req = request, res = response, next ) => {
    try {
        let authorizationToken = req.headers.authorization;
        if ( !authorizationToken ) {
            throw new Error( `Authorization Data was not provided` );
        }
        const token = authorizationToken.split( ' ' ).pop();
        if ( !token ) {
            throw new Error( `Token was not provided` );
        }

        const decodedToken = await verifyToken( token );
        console.log({ decodedToken });
        next();
    } catch ( error ) {
        errorHandle( res, 401, 'HTTP_AUTHORIZATION_ERROR', error.message )
    }
}

module.exports = {
    isAuthenticated
}