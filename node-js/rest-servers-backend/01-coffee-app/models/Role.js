const { Schema, model } = require( 'mongoose' );

const roleSchema = new Schema({
    roleName: {
        type:  String,
        required: [ true, 'Role is required' ],
    }
},{
    timestamps: true,
    versionKey: false,
});

module.exports = model( 'Role', roleSchema );