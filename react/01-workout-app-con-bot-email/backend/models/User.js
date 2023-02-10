const  { Schema, model } = require( 'mongoose' );

const userSchema = new Schema({
    name: {
        type: String,
        required: [ true, 'Name is required' ]
    },
    age: {
        type: Number,
        required: [ true, 'Age is required']
    },
    email: {
        type: String,
        required: [ true, 'Email is required' ]
    },
    password: {
        type: String,
        required: [ true, 'Password is required' ]
    },
    role: {
        type: [ 'USER', 'ADMIN' ],
        default: 'USER'
    },
    userStatus: {
        type: Boolean,
        default: true,
    }
},{
    timestamps: true,
    versionKey: false
});

module.exports = model( 'User', userSchema );