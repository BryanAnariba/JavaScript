const { getRoleByName } = require('../services/roles.service');

const verifyRole = async ( roleName = '') => {
    const isValidRole = await getRoleByName( roleName );
    if ( !isValidRole ) {
        throw new Error( `Role ${ roleName } is not valid` );
    }
}

const verifyEmail = async () => {

}

module.exports = {
    verifyRole,
    verifyEmail,
}