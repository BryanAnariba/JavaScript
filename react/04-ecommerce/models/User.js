const { Schema, model } = require( 'mongoose' );

const userEntity = new Schema({
    firstName: {
        type: String,
        required: [ true, 'First Name is required' ]
    },
    lastName: {
        type: String,
        required: [ true, 'Last Name is required' ]
    },
    email: {
        type: String,
        required: [ true, 'Email is required' ],
        unique: true
    },
    password: {
        type: String,
        required: [ true, 'Password is required' ]
    }
},{
    timestamps: true,
    versionKey: false
});

module.exports = model( 'Users', userEntity );