const { errorHandle } = require("../utils/error.handle");

const checkRole = ( roles ) => ( req, res, next ) => {
    try {
        const { user } = req;
        const rolesByUser = user.role;
        //console.log({rolesByUser});

        // si encuentra el role del usuario en la lista de roles que le permita crearla
        // ROLES => [ 'ADMIN', 'MANAGER' ], USER ROLE = [ 'USER' ], SI EXISTE USER EN ROLES true si no false
        const checkValidRole = roles.some( role => rolesByUser.includes( role ) );

        if ( !checkValidRole ) {
            throw new Error( `The user ${ user.email } does not have permissions for this action` );
        }
        next();
    } catch ( err ) {
        errorHandle( res, 401, 'HTTP_PERMISSION_ERROR', err.message );
    }
}

module.exports = {
    checkRole,
};