require( 'dotenv' ).config();
require( 'colors' );
const express = require( 'express' );
const cors = require( 'cors' );

const { dbConnect } = require( './config/DataBase' );
const { dbConnectMysql } = require('./config/MySQL');

const PORT = process.env.PORT || 3500;
const app = express();
const engineDB = process.env.ENGINE_DB;
app.set( 'PORT', PORT );

app.use( cors() );
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

console.clear();
app.use( '/api', require('./routes') );

app.use( express.static( 'storage' ) );

app.listen(app.get( 'PORT' ),  () => {
    console.log( `=============================================================>5:38`.red );
    console.log( `SERVER STARTED ON: http://localhost:${ app.get( 'PORT' ) }`.cyan );
    ( engineDB === 'nosql' ) ? dbConnect() : dbConnectMysql();
});

