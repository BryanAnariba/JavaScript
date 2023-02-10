const { response, request } = require("express");
const { errorHandle } = require("../utils/error.handle");
const { getUserById } = require("../services/user.service");
const { verifyToken } = require("../utils/jwt.handle");

const checkJWT = async ( req = request, res = response, next ) => {
    try {
        const accessToken = req.header( 'Authorization' );
        if ( typeof accessToken === undefined ||  accessToken === '' || !accessToken ) {
            throw new Error( `Token is not valid.` )
        }
        //console.log({ accessToken })

        const onlyToken = accessToken.split( ' ' ).pop();
        //console.log({ onlyToken });

        const { _id, role } =  verifyToken( onlyToken );
        //console.log({ _id, role });

        if ( !_id || _id === '' || typeof _id === undefined ) {
            throw new Error( `Unauthorized request, invalid user` );
        }

        const verifyUser = await getUserById( _id );
        if ( !verifyUser ) {
            throw new Error( `Unauthorized request, invalid user` );
        }

        if ( verifyUser.userStatus === false ) {
            throw new Error( `Inactive User, Please Contact to Admin` );
        }

        //  SI SALTO TODOS LOS THROWS ENTONCES ES QUE EL USUARIO EXISTE Y ESTA ACTIVO POR LO TANTO SE CREA EL ID EN LA REQUEST Y NEXT
        req.uid = _id;
        next();        

    } catch ( ex ) {
        return errorHandle( res, 401, 'HTTP_AUTHORIZATION_ERROR', ex.message );
    } 
}

module.exports = {
    checkJWT,
}