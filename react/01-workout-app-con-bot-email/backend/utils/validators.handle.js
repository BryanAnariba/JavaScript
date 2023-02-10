const { request, response } = require('express');
const { validationResult } = require( 'express-validator' );
const { errorHandle } = require( './error.handle' );

const validatorHandle = ( req = request, res = response, next ) => {
    try {
        // TODO: capturador de errores, si llego solo hasta aqui es que va pal catch
        validationResult( req ).throw();

        // TODO: si llego aqui significa que no hay errores
        next();
    } catch ( ex ) {
        errorHandle( res, 400, 'HTTP_VALIDATION_ERROR', ex.array() );
    }
}

module.exports = {
    validatorHandle,
}