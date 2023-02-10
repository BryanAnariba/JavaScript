import { Request, Response } from "express";
import { findItem, findItems, insertItem, updateItem, delItem } from "../services/item.service";
import { handleHttp } from "../utils/error.handle";

const getItem = async ( req: Request, res: Response ) => {
    try {
        const item = await findItem( req.params.itemId );
        return res.status( 200 ).json({ status: 200, data: item });
    } catch ( e ) {
        handleHttp( res, 'ERROR_GET_ITEM', e );
    }
}

const getItems = async ( req: Request, res: Response ) => {
    try {
        const items = await findItems();
        return res.status( 200 ).json({ status: 200, data: items });
    } catch ( e ) {
        handleHttp( res, 'ERROR_GET_ITEMS', e );
    }
}

const postItem = async ( req: Request, res: Response ) => {
    try {
        const inserted = await insertItem( req.body );
        return res.status( 201 ).json({ status: 201, data: inserted });
    } catch ( e ) {
        handleHttp( res, 'ERROR_INSERT_ITEM', e );
    }
}

const editItem = async ( req: Request, res: Response ) => {
    try {
        const updated = await updateItem( req.params.itemId, req.body );
        return res.status( 200 ).json({ status: 200, data: updated });
    } catch ( e ) {
        handleHttp( res, 'ERROR_EDIT_ITEM', e );
    }
}

const deleteItem = async ( req: Request, res: Response ) => {
    try {
        const deleted = await delItem( req.params.itemId );
        return res.status( 200 ).json({ status: 200, data: deleted });
    } catch ( e ) {
        handleHttp( res, 'ERROR_DELETE_ITEM', e );
    }
}

export {
    getItem,
    getItems,
    postItem,
    editItem,
    deleteItem,
}