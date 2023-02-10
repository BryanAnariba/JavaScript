const { check } = require( 'express-validator' );
const { validatorHandle } = require('../utils/validators.handle');

const validatorRegisterUser = [
    check( 'name' ).exists().notEmpty().isLength({ min: 1, max: 80 }),
    check( 'age' ).exists().notEmpty().isNumeric(),
    check( 'email' ).exists().notEmpty().isEmail().isLength({ min: 1, max: 80 }),
    check( 'password' ).exists().notEmpty().isLength({ min: 3, max: 15 }),
    ( req, res, next ) => validatorHandle( req, res, next ),
];

const validatorLoginUser = [
    check( 'email' ).exists().notEmpty().isEmail(),
    check( 'password' ).exists().notEmpty(),
    ( req, res, next ) => validatorHandle( req, res, next ),
];


module.exports = {
    validatorRegisterUser,
    validatorLoginUser,
}