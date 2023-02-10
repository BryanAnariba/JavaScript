const { check } = require( 'express-validator' );
const { validatorHandle } = require('../utils/validators.handle');

const validatorCreate = [
    check( 'title' ).exists().notEmpty().isLength({ min: 1, max: 100 }),
    check( 'reps' ).exists().notEmpty().isNumeric(),
    check( 'load' ).exists().notEmpty().isNumeric(),
    ( req, res, next ) => validatorHandle( req, res, next ),
];

module.exports = {
    validatorCreate,
}
