const { Router } = require( 'express' );

const router = Router();
router.post( '', ( req, res ) => {
    return res.status( 200 ).json('USER-WORKS');
});
module.exports = router;