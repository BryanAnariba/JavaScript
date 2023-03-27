const { User } = require("../models")

const createUser = async ( userData ) => {
    return await User.create( userData );
}

const findUserByEmail = async ( emailUser ) => {
    return await User.findOne({ email: emailUser });
}

const findUsers = async () => {
    return await User.find({}, { password: false });
}

const findUser = async ( userId ) => {
    return await User.findOne({ _id: userId },{ password: false });
}

const editUserStatus = async ( userId, userStatus ) => {
    return await User.findByIdAndUpdate({ _id: userId }, { userStatus: userStatus }, { new: true });
}

const editUser = async ( userId, firstName, lastName, mobile ) => {
    return await User.findByIdAndUpdate(
        { _id: userId }, 
        {
            firstName: firstName,
            lastName: lastName,
            mobile: mobile,
        },
        {
            new: true
        }
    );
}

module.exports = {
    createUser,
    findUserByEmail,
    findUsers,
    findUser,
    editUserStatus,
    editUser,
}