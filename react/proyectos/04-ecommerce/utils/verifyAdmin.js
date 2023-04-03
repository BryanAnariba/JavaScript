const { findUser } = require( '../services/user.service' );
const { errorHandle } = require('./errorHandle');

const isAdmin = async ( req, res, next ) => {
    try {
        // TODO: la idea aqui es verificar si es admin o no para redirigirlo al apartado que corresponde
        const { uid } = req.loggedUser;
        const user  = await findUser( uid ) ;

        if ( user.role.toUpperCase() !== 'ADMIN' ) {
            throw new Error( `You are not ADMIN, please try login` )
        } else {
            next();
        }
    } catch ( error ) {
        errorHandle( res, 401, 'HTTP_AUTHORIZATION_ADMIN_ERROR', error.message )
    }
}

module.exports = {
    isAdmin
}