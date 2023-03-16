const jwt = require( 'jsonwebtoken' );

const createToken = ( userData ) => {
    return jwt.sign(
        { uid: userData._id },
        `${ process.env.SECRET_KEY }`,
        { expiresIn: '1h' }
    )
}

module.exports = {
    createToken,
}