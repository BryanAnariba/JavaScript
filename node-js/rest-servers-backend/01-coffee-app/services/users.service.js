const { UserModel } = require( '../models/index' );
const User = require('../models/User');

const getUserByEmail = async ( email ) => {
    return await UserModel.findOne({ email: email });
}

const createUser = async ( userData ) => {
    return await UserModel.create( userData );
}

module.exports = {
    createUser,
    getUserByEmail
}