require( 'colors' );
const express = require( 'express' );
const cors = require( 'cors' );

const endPoints = require( './routes/index' );
const { connectMe } = require('./config/Connection');

class Server {

    constructor () {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings () {
        this.app.set( 'PORT', process.env.PORT || 3500 );
    }

    middlewares () {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.urlencoded( { extended: true } ) );
    }

    routes () {
        this.app.use( '/api', endPoints );
    }

    async startServer () {
        try {
            await this.app.listen( this.app.get( 'PORT' ) );
            const dataBaseConnection = await connectMe();
            console.log( `===================================================================`.cyan );
            console.log( `Server started at port: http//localhost:${ this.app.get( 'PORT' ) }`.magenta );
            console.log( `MongoDB started at port: ${ dataBaseConnection.connection.host }`.magenta );
            console.log( `===================================================================`.cyan );
        } catch ( error ) {
            console.log( `Error ${ error.message }`.red );
        }
    }

}

module.exports = {
    Server,
}