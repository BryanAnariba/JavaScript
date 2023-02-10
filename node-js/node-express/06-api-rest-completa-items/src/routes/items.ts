import { Router } from "express";
import { deleteItem, editItem, getItem, getItems, postItem } from "../controllers/Item";
import { logMiddleware } from "../middlewares/log";

const router: Router = Router();

// router.get( '', logMiddleware ,getItems );
// router.get( '/:itemId', logMiddleware ,getItem );

router.get( '', getItems );
router.get( '/:itemId', getItem );
router.post( '', postItem );
router.put( '/:itemId', editItem );
router.delete( '/:itemId', deleteItem );

export {
    router
}