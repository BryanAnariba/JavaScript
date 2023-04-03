const { model, Schema } = require( 'mongoose' );

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
        { type: Schema.Types.ObjectId, ref: "Address" }
    ],
    wishlist: [
        { type: Schema.Types.ObjectId, ref: "Product" }
    ],
    refreshToken: {
        type: String,
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model( 'User', userEntity );