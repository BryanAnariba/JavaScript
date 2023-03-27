import { connect } from "mongoose";

async function dbConnect (): Promise<any> {
    const DB_URI = `${ process.env.MONGO }`;
    return await connect( DB_URI );
}

export {
    dbConnect,
}