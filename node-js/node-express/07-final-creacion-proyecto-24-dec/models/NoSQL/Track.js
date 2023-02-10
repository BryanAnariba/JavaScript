const mongoose = require( 'mongoose' );

const trackSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
        },
        album: {
            type: String,
            trim: true,
        },
        cover: {
            type: String,
            trim: true,
            validate: { // CUANDO INGRESE ESTE CAMPO, VERIFICA CAMPOS PARA ESTO ES ESA CHURRO TODO FEO
                validator: ( req ) => {
                    return true;
                },
                message: "Error_URL"
            }
        },
        artist: {
            name: {
                type: String,
                trim: true,
            },
            nickName: {

            },
            nationality: {
                type: String,
                trim: true,
            }
        },
        duration: {
            start: {
                type: Number,
            },
            end: {
                type: Number,
            }
        },
        mediaId: {
            type: mongoose.Types.ObjectId,
        },
        trackStatus: {
            type: Boolean,
            default: true
        }
    },  
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model( 'Track', trackSchema );