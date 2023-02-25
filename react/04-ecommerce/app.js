require( 'dotenv/config' );
require( 'colors' );
const express = require( 'express' );
const cors = require( 'cors' );
const { connectMe } = require( './config/dbConnection' );
const indexRoutes = require( './routes/index' );

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
    }

    routes () {
        this.app.use( '/api', indexRoutes );
    }

    staticFiles () {

    }

    async start () {
        // Promise.all([
        //     this.app.listen( this.app.get( 'PORT' )),
        //     connectMe(),
        // ])
        // .then(( results ) => {
        //     console.log( results )  
        //     console.log( '============================'.magenta );
        //     console.log( `Server started on port: ${ this.app.get( 'PORT' ) }`.cyan );
        //     console.log( '============================'.magenta );
        // })
        // .catch((error) => {
        //     console.log(error)
        //})

        await this.app.listen( this.app.get( 'PORT' ));
        const connectionResult = await connectMe();
        console.log( '================================================================='.magenta );
        console.log( `Server started on port: ${ this.app.get( 'PORT' ) }`.cyan );
        console.log( `Mongo started on port: ${ connectionResult.connection.host}`.cyan );
        console.log( '================================================================='.magenta );
    }

}

module.exports = {
    Server
}