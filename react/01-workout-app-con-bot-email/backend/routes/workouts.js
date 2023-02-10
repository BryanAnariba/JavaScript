const { Router } = require( 'express' );
const { createOneItem, getAllItems, getOneItem, editOneItem, deleteOneItem } = require('../controllers/Workout');
const { checkJWT } = require('../middlewares/session.middleware');
const { validatorCreate } = require('../validators/workouts.validator');

const router = Router();

router.post( 
    '',
    [ 
        validatorCreate,
        checkJWT
    ],
    createOneItem 
);

router.get( 
    '', 
    [ checkJWT ],
    getAllItems
);

router.get( 
    '/:workOutId', 
    [ checkJWT ],
    getOneItem 
);

router.put( 
    '/:workOutId', 
    [ 
        validatorCreate,
        checkJWT
    ], 
    editOneItem 
);
router.delete( 
    '/:workOutId', 
    [ checkJWT ],
    deleteOneItem 
);

module.exports = router;