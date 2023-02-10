import { Schema, model, Model, Types } from "mongoose";
import { ICar } from '../interfaces/ICar';

const itemSchema = new Schema({
    name: {
        type: String,
        required: [ true, 'Name Of Car is required' ]
    },
    color: {
        type: String,
        required: [ true, 'Color is required' ]
    },
    gas: {
        type: String,
        enum: [ 'Gasoline', 'Electric' ],
        required: [ true, 'Gas is required' ]
    },
    year: {
        type: Number,
        required: [ true, 'Year is required' ]
    },
    description: {
        type: String,
        required: [ true, 'Descripction is required' ] 
    }, 
    price: {
        type: Number,
        required: [ true, 'Price is required' ]
    }
},{
    versionKey: false,
    timestamps: true
});

const itemModel = model<ICar>( 'Items', itemSchema );

export {
    itemModel as ItemModel
}