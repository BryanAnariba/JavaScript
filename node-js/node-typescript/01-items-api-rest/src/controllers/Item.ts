import { Request, Response } from "express";
import { createCar, getCars } from "../services/items.service";
import { errorHandle } from "../utils/error.handle";

const createItem = async ( req: Request, res: Response ): Promise<any> => {
    try {
        const responseItem = await createCar( req.body );
        return res.status( 201 ).json({ statusCode: 201, data: responseItem });
    } catch ( e: string | any ) {
        return errorHandle( res, 500, 'HTTP_CREATE_ITEM_ERROR', e.message );
    }
}

const getItems  = async ( req: Request, res: Response ): Promise<any> => {
    try {
        const responseItem = await getCars();
        return res.status( 200 ).json({ statusCode: 200, data: responseItem });
    } catch ( e: string | any ) {
        return errorHandle( res, 500, 'HTTP_GET_ITEM_ERROR', e.message );
    }
}

const getOneItem  = async ( req: Request, res: Response ): Promise<any> => {
    try {

    } catch ( e: string | any ) {
        return errorHandle( res, 500, 'HTTP_GET_ONE_ITEM_ERROR', e.message );
    }
}

const editItem  = async ( req: Request, res: Response ): Promise<any> => {
    try {

    } catch ( e: string | any ) {
        return errorHandle( res, 500, 'HTTP_EDIT_ITEM_ERROR', e.message );
    }
}

const delItem  = async ( req: Request, res: Response ): Promise<any> => {
    try {

    } catch ( e: string | any ) {
        return errorHandle( res, 500, 'HTTP_DELETE_ITEM_ERROR', e.message );
    }
}

// 1 Hora

export {
    createItem ,
    getItems ,
    getOneItem ,
    editItem ,
    delItem ,
}