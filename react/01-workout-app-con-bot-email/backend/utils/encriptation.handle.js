const bcrypt = require( 'bcryptjs' );

const encrypt = async ( password ) => {
    const salt = await bcrypt.genSalt( 10 );
    return await bcrypt.hash( password, salt );
}

const isMatch = async ( passwordPlane, encryptedPassword ) => {
    return await bcrypt.compare( passwordPlane, encryptedPassword );
}

module.exports = {
    encrypt,
    isMatch,
}