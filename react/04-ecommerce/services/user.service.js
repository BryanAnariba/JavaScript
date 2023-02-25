const { UserModel } = require( '../models/index' );

const getUserByEmail = async ( email ) => {
    return await UserModel.findOne({ email: email });
}

const createUser = async ( userData ) => {
    return await UserModel.create( userData );
}

module.exports = {
    getUserByEmail,
    createUser,
}