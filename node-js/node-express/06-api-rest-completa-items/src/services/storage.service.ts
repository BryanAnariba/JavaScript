import { IStorage } from "../interfaces/IStorage"
import { StorageModel } from "../models/storage"

const uploadImage = async ( image: IStorage ) => {
    return await StorageModel.create( image );
}

export {
    uploadImage,
}