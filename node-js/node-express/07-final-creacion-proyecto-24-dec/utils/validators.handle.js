const { validationResult } = require("express-validator");
const { errorHandle } = require("./error.handle");

const validatorHandle = ( req, res, next ) => {
    try {
        validationResult( req ).throw();
        // TODO: no hay errores, siguele papi
        next();
    } catch( err ) {
        // TODO: ay clavo papa te falto un campo
        errorHandle( res, 403, 'HTTP_CREATE_TRACK_ERROR', err.array() );
    }
}

module.exports = {
    validatorHandle,
}