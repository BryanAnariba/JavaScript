import { ICar } from "../interfaces/ICar"
import { ItemModel } from "../models/item"

const getOrders = async (): Promise<ICar[]> => {
    return await ItemModel.find({});
}


export {
    getOrders
}