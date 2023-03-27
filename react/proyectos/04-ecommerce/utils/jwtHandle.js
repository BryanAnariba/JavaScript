const jwt = require( 'jsonwebtoken' );

const createToken = ( userData ) => {
    return jwt.sign(
        { uid: userData._id },
        `${ process.env.SECRET_KEY }`,
        { expiresIn: '1h' }
    )
}

const verifyToken = async ( token ) => {
    return await jwt.verify( token, `${ process.env.SECRET_KEY }` );
}

module.exports = {
    createToken,
    verifyToken,
}