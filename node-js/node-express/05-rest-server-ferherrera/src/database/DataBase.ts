import { connect } from "mongoose";
import "colors";

export const connectMe = async (): Promise<void> => {
    try {
        const startConnection = await connect( `${ process.env.MONGO_URI }` );
        console.log( `DataBase Connected on port ${ startConnection.connection.host }`.cyan );
    } catch ( error ) {
        throw new Error( `Mongo Connection Failer ${ error }` );
    }
}