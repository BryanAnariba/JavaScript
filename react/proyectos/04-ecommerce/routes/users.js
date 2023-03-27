const { Router } = require( 'express' );
const { signUp, signIn, getData, getUser, deleteUser, updateUser } = require('../controllers/User');

const router = Router();

router.post( '/signup', signUp );
router.post( '/signin', signIn );
router.get( '', getData );
router.get( '/:userId', getUser );
router.delete( '/:userId', deleteUser );
router.put( '/:userId', updateUser );


module.exports = router;