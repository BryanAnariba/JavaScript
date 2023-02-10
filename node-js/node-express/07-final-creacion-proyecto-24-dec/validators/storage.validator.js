const { check } = require( 'express-validator' );
const { validatorHandle } = require( '../utils/validators.handle' );

const validatorCreateItem = [
    check( 'filename' ).exists().notEmpty(),
    check( 'url' ).exists().notEmpty(),
    ( req, res, next ) => validatorHandle( req, res, next ),
];


const validatorGetItems = [
    check( 'itemId' ).exists().notEmpty().isMongoId(),
    ( req, res, next ) => validatorHandle( req, res, next ),
]

module.exports = {
    validatorCreateItem,
    validatorGetItems,
}