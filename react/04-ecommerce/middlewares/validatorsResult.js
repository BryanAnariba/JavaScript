const { request, response } = require('express');
const { validationResult } = require( 'express-validator' );
const { httpErrorHandle } = require( '../utils/error.handle' );

const validatorsResult =  ( req = request, res = response, next ) => {

    const errors = validationResult( req );

    if ( !errors.isEmpty() ) {
        return httpErrorHandle( res, 400, 'HTTP_VALIDATION_FIELDS_ERROR', errors );
    }

    next();
}

module.exports = {
    validatorsResult,
}