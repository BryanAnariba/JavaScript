const { Router } = require( 'express' );
const { check } = require( 'express-validator' );
const { signUp, signIn } = require('../controllers/User');
const { validatorsResult } = require('../middlewares/validatorsResult');
const router = Router();

router.post( 
    '/signup', 
    [
        check( 'firstName', 'First Name is required' ).not().isEmpty(),
        check( 'lastName', 'Last Name is required' ).not().isEmpty(),
        check( 'email', 'Incorrect email format' ).isEmail(),
        check( 'password', 'Weak password' ).isLength({ min: 6, max: 15 }),
        validatorsResult
    ],
    signUp 
);
router.post( 
    '/signup', 
    [
        check( 'email', 'Incorrect email format' ).isEmail(),
        check( 'password', 'Password is required' ).isEmpty(),
        validatorsResult
    ],
    signIn 
);



module.exports = router;