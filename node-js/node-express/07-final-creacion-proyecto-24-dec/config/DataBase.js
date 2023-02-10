const mongoose = require( 'mongoose' );

const dbConnect = () => {
    const DB_URI = `${ process.env.DB_URI }`;
    mongoose.set( 'strictQuery', false );
    mongoose.connect( DB_URI )
    .then((res) => {
        console.log( `MongoDB Started ON ${ res.connection.host }`.cyan );
        console.log( `=============================================================`.red );
    })
    .catch((error) => {
        console.log( `MONGODB ERROR: ${ error }`.red );
    });
}

module.exports = {
    dbConnect,
}