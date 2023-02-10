import { Schema, model } from 'mongoose';
import { IUser } from '../interfaces/IUser';

const userSchema = new Schema<IUser>({
    userName: {
        type: String,
        required: [ true, 'User Name Is Required' ],
        trim: true
    }, 
    userLastName: {
        type: String,
        required: [ true, 'User Last Name Is Required' ],
        trim: true
    },
    userImg: {
        type: String,
        default: ''
    },
    userEmail: {
        type: String,
        required: [ true, 'Email Is Required' ],
        unique: true,
        trim: true
    },
    userPassword: {
        type: String,
        required: [ true, 'Password Is Required' ]
    },
    userStatus: {
        type: Boolean,
        default: true
    },
    userGoogle: {
        type: Boolean,
        default: false
    },
    userRole: {
        type: String,
        required: true,
        enum: [ 'ADMIN', 'USER', 'SALES' ]
    }
},{
    timestamps: true,
    versionKey: false
});

userSchema.methods.toJSON = function () {
    // SOLO EXTRAIGO EL PASSWORD PARA QUE NO LA MANDE EN LA RESPUESTA
    const { userPassword, _id, ...rest } = this.toObject();
    rest.uid = _id;
    return rest;
}

const UserModel = model<IUser>( 'Users', userSchema );

export {
    UserModel
}