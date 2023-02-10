const express = require( 'express' );
require( 'colors' );

class Server {

    constructor () {
        this.app = express();
        this.settings();
        this.middlewares();
        this.staticFiles();
        this.routes();

    }

    settings () {
        this.app.set( 'PORT', process.env.PORT | 3500 );
    }

    middlewares () {
        this.app.use( express.json() );
        this.app.use( express.urlencoded( { extended: true } ) );
    }

    routes () {
        // http://localhost:3500/generic ------> funciona sin el .html
        this.app.get( '/generic', ( req, res ) => {
            res.sendFile( __dirname + '/public/generic.html' )
        });
        // http://localhost:3500/elements ------> funciona sin el .html
        this.app.get( '/elements', ( req, res ) => {
            res.sendFile( __dirname + '/public/elements.html' )
        });
        this.app.get( '*', (req, res) => {
            res.sendFile( __dirname + '/public/not-found.html' ); 
        });
    }

    staticFiles () {
        this.app.use( express.static( 'public' ) );
    }

    start () {
        this.app.listen( this.app.get( 'PORT' ), () => {
            console.log( `Server started on port ${ this.app.get( 'PORT' ) }`.cyan );
        });
    }

}

module.exports = { 
    Server 
};