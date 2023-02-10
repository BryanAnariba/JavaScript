const fs = require( 'fs' );
const archivo = './database/data.json';
const GuardarData = ( data ) => {
    fs.writeFileSync( archivo, JSON.stringify( data ) );
}

const leerDB = () => {
    if ( !fs.existsSync( archivo ) ) {
        return null;
    }
    const data = fs.readFileSync( archivo, { encoding: 'utf-8' });
    return JSON.parse( data );
}

module.exports = { GuardarData, leerDB, };