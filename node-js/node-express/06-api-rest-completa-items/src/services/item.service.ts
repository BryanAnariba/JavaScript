import { ICar } from "../interfaces/ICar"
import { ItemModel } from "../models/item"

const insertItem = async ( item: ICar ): Promise<ICar> => {
    const responseInsert = await ItemModel.create( item );
    return responseInsert; 
}

const findItems = async (): Promise<ICar[]> => {
    return await ItemModel.find({});
}

const findItem = async ( itemId: string ): Promise<any> => {
    const item = await ItemModel.findOne({ _id: itemId });
    return item;
}

const updateItem = async ( itemId: string, car: ICar ): Promise<any> => {
    const updated = ItemModel.findOneAndUpdate( { _id: itemId }, car, { new: true } );
    return updated;
}

const delItem = async ( itemId: string ): Promise<any> => {
    const deleted = await ItemModel.remove({ _id: itemId });
    return deleted;
}

export {
    insertItem,
    findItems,
    findItem,
    updateItem,
    delItem,
}