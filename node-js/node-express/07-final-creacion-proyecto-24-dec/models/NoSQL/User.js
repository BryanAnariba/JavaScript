const { Schema, model } = require( 'mongoose' );

const userSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: [ true, 'Name is required' ],
        },
        age: {
            type: Number,
            required: [ true, 'Age is required' ],
        },
        email: {
            type: String,
            unique: true,
            trim: true,
            required: [ true, 'Email is required' ],
        },
        password: {
            type: String,
            trim: true,
            required: [ true, 'Password is required' ],
        },
        role: {
            type: [ "USER", "ADMIN" ],
            default: "USER",
        }
    },  
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = model( 'User', userSchema );