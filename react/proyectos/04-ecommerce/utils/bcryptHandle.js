const { genSalt, hash, compare } = require( 'bcryptjs' );

const encryptPassword = async ( password ) => {
    const salt = await genSalt( 10 );
    const encryptedPassword = await hash( password, salt );
    return encryptedPassword;
}

const verifyPassword = async ( password, hashedPassword ) => {
    return await compare( password, hashedPassword );
}

module.exports = {
    encryptPassword,
    verifyPassword
}