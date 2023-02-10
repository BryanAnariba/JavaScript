const { usersModel } = require( '../models/index' );
const getUserByEmail = async ( email ) => {
    return await usersModel.find({ email: email });
}

module.exports = {
    getUserByEmail,
}