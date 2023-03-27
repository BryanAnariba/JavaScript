import { Schema, model } from 'mongoose';
import { Car } from '../interface/Car';

const ItemEntity = new Schema<Car>({
    name: {
        type: String,
        required: [ true, 'Name is required' ]
    },
    color: {
        type: String,
        required: [ true, 'Color is required' ]
    },
    gas: {
        type: String,
        required: [ true, 'Gas is required' ],
        enum: [ 'Gasoline', 'Electric' ]
    },
    year: {
        type: Number,
        required: [ true, 'Year is required' ]
    },
    description: {
        type: String,
        required: [ true, 'Description is required' ]
    },
    price: {
        type: Number,
        required: [ true, 'Price is required' ]
    }
},{
    timestamps: true,
    versionKey: false
});

export default model<Car>( 'Items', ItemEntity );