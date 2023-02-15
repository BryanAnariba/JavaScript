import 'dotenv/config';
import 'colors';
import express from 'express';
import cors from 'cors';
import indexRoutes from './routes/index.js';
import { getConnection } from './database/database.js';

class Server {

    constructor () {
        this.settings();
        this.middlewares();
        this.routes();
        this.staticFiles();
    }

    settings () {
        this.app = express();
        this.app.set( 'PORT', process.env.PORT || 5500 );
    }

    middlewares () {
        this.app.use( express.json() );
        this.app.use( express.urlencoded({ extended: true }) );
        this.app.use( cors() );
    }

    routes () {
        this.app.use( '/api', indexRoutes );
    }

    staticFiles () {
        
    }

    async start () {
        try {
            await this.app.listen( this.app.get( `PORT` ) );
            const conn = await getConnection();
            50
            console.log( `========================================================================`.red );
            console.log( `Node Server Started on Port: http://localhost:${ this.app.get( 'PORT' ) }`.cyan );
            console.log( `Mongo Server Started on Port: ${ conn.connection.host }`.cyan );
            console.log( `========================================================================`.red );
        } catch ( error ) {
            throw new Error( `Error: ${ error.message }` );
        }
    }

}

export {
    Server
}