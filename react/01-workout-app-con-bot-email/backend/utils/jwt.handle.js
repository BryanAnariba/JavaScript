const jwt = require( 'jsonwebtoken' );

const getToken = ( user ) => {
    return jwt.sign({ _id: user._id, email: user.email, role: user.role }, `${ process.env.JWT_SECRET }`, { expiresIn: '1h' })
}

const verifyToken = ( token ) => {
    return jwt.verify( token, process.env.JWT_SECRET );
}
module.exports = {
    getToken,
    verifyToken
}