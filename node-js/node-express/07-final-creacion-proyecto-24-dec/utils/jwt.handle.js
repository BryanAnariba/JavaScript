const jwt = require( 'jsonwebtoken' );
const getProperties = require( '../utils/handleEngineProperties' );
const propertiesKey = getProperties();

// TODO: creando el token con el usuario sea registrado o logueado
const signToken = async ( user ) => {
    const sign = await jwt.sign({ 
        [ propertiesKey.id ]: user[ propertiesKey.id ], // [ propertiesKey ] es dinamico depende de la variable de entorno nosql o sql, si es sql usa id si no _id
        role: user.role 
    },
    process.env.JWT_SECRET, 
    { 
        expiresIn: '1h' 
    });
    return sign;
}

// TODO: verificando el tokende la peticion que llega desde el usuario
const verifyToken = ( token ) => {
    try {
        return jwt.verify( token, process.env.JWT_SECRET );
    } catch ( e ) {
        return null;
    }
}

module.exports = {
    signToken,
    verifyToken,
}