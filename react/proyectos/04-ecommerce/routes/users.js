const { Router } = require( 'express' );
const { signUp, signIn, getData, getUser, deleteUser, updateUser } = require('../controllers/User');
const { isAuthenticated } = require('../middlewares/auth');
const { isAdmin } = require('../utils/verifyAdmin');
const { handleRefreshToken } = require('../utils/jwtHandle');

const router = Router();

router.post( '/signup', signUp );
router.post( '/signin', signIn );
router.get( '', [ isAuthenticated, isAdmin ], getData );
router.get( '/:userId', [ isAuthenticated, isAdmin ], getUser );
router.delete( '/:userId', [ isAuthenticated, isAdmin ], deleteUser );
router.put( '/', [ isAuthenticated ], updateUser );
router.get( '/token/refresh', handleRefreshToken );

module.exports = router;

//#endregionhttps://www.youtube.com/watch?v=l6wOghW_gNI&list=PL2Z95CSZ1N4EO3wqFmTBNZXCovLpxkEqB