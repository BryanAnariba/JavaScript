const { Router } = require('express');
const { getItems, getItem, createItem, editItem, deleteItem } = require('../controllers/Track');
const { checkRole } = require('../middlewares/role');
const { authMiddleware } = require('../middlewares/session');
const { validatorCreateItem, validatorGetItems } = require('../validators/tracks.validator');
const router = Router();

router.get( 
    '', 
    [ authMiddleware ],
    getItems );

router.get( 
    '/:itemId', 
    [
        validatorGetItems,
        authMiddleware,
    ],
    getItem );

router.post( 
    '',
    [ 
        authMiddleware,
        checkRole(['ADMIN', 'MANAGER']),
        validatorCreateItem,
    ],
    createItem 
);

router.put( 
    '/:itemId', 
    [ 
        validatorGetItems, 
        validatorCreateItem ,
        authMiddleware,
    ],
    editItem );

router.delete( 
    '/:itemId',
    [
        validatorGetItems,
        authMiddleware,
    ],
    deleteItem );

module.exports = router;