const { User } = require( '../models' );

const findUserByEmail = async ( email ) => {
    return await User.findOne({ email: email });
}

const createNewUser = async ( user ) => {
    return await User.create( user );
}

const getUserById = async ( _id ) => {
    return await User.findOne({ _id: _id });s
}

module.exports = {
    findUserByEmail,
    createNewUser,
    getUserById,
}