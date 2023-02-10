import express, { Application } from "express"
import cors from 'cors';
import 'colors';
import { indexRoutes } from "./routes";
import { connectMe } from './database/DataBase';

export class Server {
    app: Application;
    constructor () {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings (): void {
        this.app.set( 'PORT', process.env.PORT || 5000 );
    }

    middlewares (): void {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.urlencoded({ extended: true }) );
        this.app.use( '/', express.static( __dirname + '/public' ) );
    }

    routes(): void {
        this.app.use( indexRoutes );
    }

    dataBase = async () => {
        await connectMe();
    }

    startServer = () => {
        this.app.listen( this.app.get( 'PORT' ), () => {
            console.log( `Server started on port: ${ this.app.get( 'PORT' ) }`.cyan );
            this.dataBase();
        });
    }
}