const jwt = require( 'jsonwebtoken' );

const generateRefreshToken = async ( userData ) => {
    return jwt.sign(
        { uid: userData._id },
        `${ process.env.SECRET_KEY }`,
        { expiresIn: '1d' }
    )
}

module.exports = {
    generateRefreshToken,
}