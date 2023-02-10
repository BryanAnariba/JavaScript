const { Router } = require('express');
const { createItem, getItems, getItem, deleteItem, deleteItemPermanently } = require('../controllers/Storage');
const customHeader = require('../middlewares/custom.header');
const { uploadMiddleware } = require('../middlewares/multer');
const { validatorGetItems, validatorCreateItem } = require('../validators/storage.validator');

const router = Router();

router.get( 
    '',
    [],
    getItems,
);

router.get(
    '/:itemId',
    [ validatorGetItems ], 
    getItem,
);

router.post( 
    '',
    [ uploadMiddleware.single( 'file' ) ] ,
    //[ uploadMiddleware.single( 'file' ), validatorCreateItem ] ,
    createItem
);

router.delete( // ESTE ES UN SOFTDELETE BORRADO LOGICO SOLO DE CAMBIAR EL ESTADO 
    '/:itemId',
    [ validatorGetItems ],
    deleteItem,
);

router.delete( // ESTE SI ELIMINA Y BORRA EL ARCHIVO
    '/delete/:itemId',
    [ validatorGetItems ],
    deleteItemPermanently,
);

module.exports = router;