import { Response } from "express";
import { getOrders } from "../services/order.service";
import { handleHttp } from "../utils/error.handle";
import { IRequestExtend } from "../interfaces/IRequestExtend";


const getItems = async ( req: IRequestExtend, res: Response ) => {
    try {
        const items = await getOrders();
        return res.status( 200 ).json({ status: 200, data: items, msm: 'OJO ESTA RUTA ES PRIVADA', user: req.user });
    } catch ( e ) {
        handleHttp( res, 'ERROR_GET_ORDERS', e );
    }
}

export {
    getItems,
}