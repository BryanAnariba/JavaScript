const bcryptjs = require( 'bcryptjs' );

const encryptPassword = async ( password ) => {
    const salt = await bcryptjs.genSalt( 10 );
    const hashedPassword = await bcryptjs.hash( password, salt );
    return hashedPassword;
}

const comparePasswords = async ( password, hashedPassword ) => {
    return await bcryptjs.compare( password, hashedPassword );
}

module.exports = {
    encryptPassword,
    comparePasswords,
}