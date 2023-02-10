const { Router } = require( 'express' );
const { createItem, getItems } = require('../controllers/Role');

router = Router();

router.get( '', getItems );
router.post( '', createItem );

module.exports = router;