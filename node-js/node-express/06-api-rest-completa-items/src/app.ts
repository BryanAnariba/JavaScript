import 'dotenv/config';
import 'colors';
import express, { Application, json, urlencoded }  from 'express';
import cors from 'cors';
import { router } from './routes/index';
import { DataBase } from './database/mongo';


// Settings
const app: Application = express();
app.set( 'PORT', process.env.PORT || 5000 );

// Middlewares
app.use( cors() );
app.use( json() );
app.use( urlencoded( { extended: true } ) );

// Routes
//console.clear();
app.use( router );

// Start server
app.listen( app.get( 'PORT' ), () => {
    console.log( '============================'.magenta );
    console.log( `Server started on port: ${ app.get( 'PORT' ) }`.cyan );
    const db = new DataBase();
    db.connect();
});

