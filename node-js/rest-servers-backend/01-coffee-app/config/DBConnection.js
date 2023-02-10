const mongoose = require( 'mongoose' );
mongoose.set( 'strictQuery', true );

const DBConnect = async () => {
    return await mongoose.connect(`${ process.env.MONGO_CNN }`);
}

module.exports = {
    DBConnect,
}