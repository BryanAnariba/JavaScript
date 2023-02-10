require( 'colors' );
const express = require( 'express' );
const cors = require( 'cors' );
const { endPoints } = require('./routes');
const { DBConnect } = require('./config/DBConnection');

class Server {

    constructor () {
        this.app = express();
        this.port = process.env.PORT || 5500;
        this.settings();
        this.middlewares();
        this.routes();
        this.staticFiles();
    }

    // Settings
    settings = () => {
        this.app.set( 'PORT', this.port );
    }

    // Middlewares
    middlewares = () => {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.urlencoded({ extended: true }) );
    }

    // Routes
    routes = () => {
        this.app.use( '/api', endPoints );
    }

    // Static Files
    staticFiles = () => {
        this.app.use( express.static( 'public' ) );
    }

    // Start Server
    start = () => {
        this.app.listen( this.app.get( 'PORT' ), () => {
            DBConnect()
            .then((success) => {
                console.log( `===================================================================`.red );
                console.log( `Node JS Server started on port: ${ this.app.get( 'PORT' ) }`.cyan );
                console.log( `MongoDB Connect At Port: ${ success.connection.host }`.cyan );
                console.log( `===================================================================`.red );
            })
            .catch((error) => console.log( `Error: ${ error }`.red ));
        });
    }
}

module.exports = {
    Server
}