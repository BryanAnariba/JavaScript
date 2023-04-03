require( 'dotenv/config' );
require( 'colors' );
const express = require( 'express' );
const cors = require( 'cors' );
const cookieParser = require( 'cookie-parser' );
const indexRoutes = require( './routes/index' );
const { connectToDB } = require('./config/dbConnection');

class Server {

    constructor () {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
        this.staticFiles();
    }

    settings () {
        this.app.set( 'PORT', process.env.PORT || 3500 );
    }

    middlewares () {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.urlencoded({ extended: true }) );
        this.app.use( cookieParser() );
    }

    routes () {
        this.app.use( '/api', indexRoutes );
    }

    staticFiles () {

    }

    async start () {
        try {
            await this.app.listen( this.app.get( 'PORT' ));
            const response = await connectToDB();
            console.log( '=========================================================================='.magenta );
            console.log( `Server started on port: ${ this.app.get( 'PORT' ) }`.cyan );
            console.log( `MongoDB Server started on host: ${ response.connection.host }`.cyan );
            console.log( '=========================================================================='.magenta );
        } catch ( error ) {
            throw new Error( `Error: ${ error }` );
        }
    }

}

module.exports = {
    Server
}