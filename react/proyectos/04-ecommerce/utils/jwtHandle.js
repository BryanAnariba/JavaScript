const jwt = require( 'jsonwebtoken' );
const { findUserByToken } = require('../services/user.service');
const { errorHandle } = require('./errorHandle');

const createToken = ( userData ) => {
    return jwt.sign(
        { uid: userData._id },
        `${ process.env.SECRET_KEY }`,
        { expiresIn: '1h' }
    )
}

const verifyToken = async ( token ) => {
    return await jwt.verify( token, `${ process.env.SECRET_KEY }` );
}

// TODO: usando el refresh token kenja no mago
const handleRefreshToken = async ( req, res ) => {
    try {
        const cookies = req.cookies;

        //console.log( 'Cookies Guardadas JWT: ', { cookies } );
        if ( !cookies.refreshToken ) {
            throw new Error( 'Refresh token is not provided in cookies' );
        }

        const refreshToken = cookies.refreshToken;
        //console.log({ refreshToken });

        const user = await findUserByToken( refreshToken );
        if ( !user ) {
            throw new Error( 'The user does not have refresh token, or refresh token does not matched' );
        }

        const isValidJWT = await verifyToken( refreshToken );

        console.log(user);
    } catch( error ) {
        return errorHandle( res, 401, 'HTTP_REFRESH_TOKEN_ERROR', error.message );
    }
}


17

module.exports = {
    createToken,
    verifyToken,
    handleRefreshToken
}