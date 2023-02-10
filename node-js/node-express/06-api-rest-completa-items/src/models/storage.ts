import { Schema, model, Model, Types } from "mongoose";
import { IStorage } from '../interfaces/IStorage';

const storageSchema = new Schema({
    fileName: {
        type: String,
        required: [ true, 'File Name is required' ]
    },
    path: {
        type: String,
        required: [ true, 'Path is required' ]
    },
    userId: {
        type: String,
        required: [ true, 'User is required' ]
    },
},{
    versionKey: false,
    timestamps: true
});

const storageModel = model<IStorage>( 'Storages', storageSchema );

export {
    storageModel as StorageModel
}