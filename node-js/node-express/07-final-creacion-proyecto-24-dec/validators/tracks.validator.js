const { check } = require( 'express-validator' );
const { validatorHandle } = require('../utils/validators.handle');

const validatorCreateItem = [
    check( 'name' ).exists().notEmpty().isLength({ min: 5, max: 80 }),
    check( 'album' ).exists().notEmpty().isLength({ min: 5, max: 100 }),
    check( 'cover' ).exists().notEmpty().isLength({ min: 5, max: 100 }),
    check( 'artist' ).exists().notEmpty(),
    check( 'artist.name' ).exists().notEmpty().isLength({ min: 5, max: 100 }),
    check( 'artist.nickName' ).exists().notEmpty().isLength({ min: 5, max: 80 }),
    check( 'artist.nationality' ).exists().notEmpty().isLength({ min: 2, max: 40 }),
    check( 'duration' ).exists().notEmpty(),
    check( 'duration.start' ).exists().notEmpty(),
    check( 'duration.end' ).exists().notEmpty(),
    check( 'mediaId' ).exists().notEmpty().isMongoId(),
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