const { genSalt, hash, compare } = require( 'bcryptjs' );

const encryptPassword = async ( password ) => {
    const salt =  await genSalt( 10 );
    return await hash( password, salt );
}

const doMatchPasswords = async ( password, hashedPassword ) => {
    return await compare( password, hashedPassword );
}

module.exports = {
    encryptPassword,
    doMatchPasswords,
}