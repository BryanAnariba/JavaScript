const mongoose = require( 'mongoose' );
mongoose.set( 'strictQuery', false );

const connectMe = async () => {
    return await mongoose.connect( `${ process.env.CONNECTION }` );
}

module.exports = {
    connectMe,
}