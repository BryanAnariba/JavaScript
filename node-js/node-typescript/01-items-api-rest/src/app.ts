import 'dotenv/config';
import 'colors';
import express from "express";
import cors from 'cors';
import indexRoutes from './routes/index';
import { dbConnect } from './database/Connection';

const app: express.Application = express();

// SETTINGS
const PORT = process.env.PORT || 3500;
app.set( 'PORT', PORT );
app.use( cors() );

// MIDDLEWARES
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// ROUTES
app.use( '/api', indexRoutes );

// START SERVER
app.listen(app.get( 'PORT' ), () => {
    dbConnect()
    .then(( conn ) => {
        console.log( `==========================================================================`.red );
        console.log( `Node Server Started on port: ${ app.get( 'PORT' ) }`.cyan );
        console.log( `MongoDB Server started on port: ${ conn.connection.host }`.cyan );
        console.log( `==========================================================================`.red );
    })
});

