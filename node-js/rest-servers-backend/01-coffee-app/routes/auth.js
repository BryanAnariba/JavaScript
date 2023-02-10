const { Router } = require( 'express' );
const { check } = require('express-validator');
const { createItem } = require('../controllers/Auth');
const { verifyRole } = require('../helpers/validators');
const { validatorHandle } = require('../middlewares/validator.handle');


const router = Router();

router.post( 
    '/signup',
    [
        check( 'email', 'Email is not valid' ).isEmail(),
        check( 'completeName', 'Your Name is required' ).not().isEmpty(),
        check( 'password', 'Incorrect password, Min 6 Characters' ).isLength({ min: 6, max: 30 }),
        check( 'role' ).custom( ( roleName ) => verifyRole( roleName ) ),
        validatorHandle,
    ], 
    createItem
);

module.exports = router;