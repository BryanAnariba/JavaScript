import {  Router } from "express";
import { deleteModel } from "mongoose";
import { createItem, editItem, getItems, getOneItem } from "../controllers/Item";

const router: Router = Router();

router.get( '', getItems );
router.get( '/:itemId', getOneItem );
router.post( '', createItem );
router.put( '/:itemId', editItem );
router.delete( '/:itemId', deleteModel );

export { router };