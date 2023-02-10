import 'dotenv/config';
import mongoose from 'mongoose';

export class DataBase {
    private host: string = 'localhost';
    private port: string | number = 27017;
    private db: string = 'ApiRestDev';

    connect = async (): Promise<void> => {
        try {
            await mongoose.connect( `mongodb://${ this.host }:${ this.port }/${ this.db }` );
            console.log( `MongoDB is connected`.cyan );
            console.log( '============================'.magenta );
        } catch ( err ) {
            throw new Error( `Error: ${ err }` );
        }
    }
}

// NOMBRE INSTANCIA => Server=localhost\SQLEXPRESS;Database=master;Trusted_Connection=True;

