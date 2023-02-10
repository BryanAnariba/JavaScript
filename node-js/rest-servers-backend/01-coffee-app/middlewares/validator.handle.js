const { validationResult } = require("express-validator");
const { errorHandle } = require("../utils/error.handle");


const validatorHandle = ( req, res, next ) => {
    const errors = validationResult(req);

    if ( !errors.isEmpty() ) {
        return errorHandle( res, 400, 'HTTP_FIELDS_ERROR', errors );;
    }

    next();
}

module.exports = {
    validatorHandle,
}