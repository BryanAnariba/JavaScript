const { Schema, model } = require( 'mongoose' );

const userSchema = new Schema({
    completeName: {
        type: String,
        required: [ true, 'Complete Name is required' ]
    },
    email: {
        type: String,
        unique: true,
        required: [ true, 'Email is required' ]
    },
    password: {
        type: String,
        required: [ true, 'Password is required' ]
    },
    img: {
        type: String,
        default: ''
    },
    role: {
        type: String,
        required: true,
        enum: [ 'ADMIN', 'USER', 'SALES' ],
        default: 'USER'
    },
    userStatus: {
        type: Boolean,
        default: true
    },
    isGoogleSignIn: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true,
    versionKey: false
});

module.exports = model( 'User', userSchema );