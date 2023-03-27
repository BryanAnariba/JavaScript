const mongoose = require( 'mongoose' );



const connectToDB = async () => {
    return await mongoose.connect( `${ process.env.MONGO_URI }` );
}

module.exports = {
    connectToDB,
}