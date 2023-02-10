const { RoleModel } = require("../models")

const getRoles = async () => {
    return await RoleModel.find();
}

const createRole = async ( roleName ) => {
    return await RoleModel.create({ roleName: roleName });
}

const getRoleByName = async ( roleName ) => {
    return await RoleModel.findOne({ roleName: roleName })
}

module.exports = {
    getRoles,
    createRole,
    getRoleByName,
}