import { Schema, model, Model, Types } from 'mongoose';
import { IUser } from '../interfaces/IUser';

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: [ true, 'Name is required' ]
    },
    description: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        unique: true,
        required: [ true, 'Name is required' ]
    },
    password: {
        type: String,
        required: [ true, 'Name is required' ]
    }
},{
    timestamps: true,
    versionKey: false
});

const userModel = model<IUser>( 'Users', userSchema );

export {
    userModel as UserModel
}
