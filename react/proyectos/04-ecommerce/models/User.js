const { model, Schema, ObjectId } = require( 'mongoose' );

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
        required: [ true, 'email Name is required' ],
        unique: true
    },
    mobile: {
        type: String,
        required: [ true, 'mobile Name is required' ],  
    },
    password: {
        type: String,
        required: [ true, 'Last Name is required' ]
    },
    role: {
        type: String,
        default: 'USER',
    },
    userStatus: {
        type: Boolean,
        default: true
    },
    cart: {
        type: Array,
        default: []
    },
    address: [
        { type: ObjectId, ref: "Address" }
    ],
    wishlist: [
        { type: ObjectId, ref: "Product" }
    ]
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model( 'User', userEntity );