const { Router } = require( 'express' );
const { getItems, getItem, editItem, deleteItem } = require('../controllers/User');

const router = Router();

router.get( '', getItems );
router.get( '/:itemId', getItem );
router.put( '/:itemId', editItem );
router.delete( '/:itemId', deleteItem );

module.exports = router;