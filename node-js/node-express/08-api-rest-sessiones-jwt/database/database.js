import mongoose from 'mongoose';

mongoose.set( 'strictQuery', true );

const getConnection = async () => {
    return await mongoose.connect( `${ process.env.MONGO_CONNECTION }` );
}

export {
    getConnection,
}