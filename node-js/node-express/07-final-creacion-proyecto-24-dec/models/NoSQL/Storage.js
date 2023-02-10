const { Schema, model } = require( 'mongoose' );

const storageSchema = new Schema(
    {
        url: {
            type: String,
            trim: true,
        },
        fileName: {
            type: String,
            trim: true,
        },
        storageStatus: {
            type: Boolean,
            default: true
        }
    },  
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = model( 'Storage', storageSchema );