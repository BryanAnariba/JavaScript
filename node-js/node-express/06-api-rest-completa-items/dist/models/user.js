"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    description: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Name is required']
    },
    password: {
        type: String,
        required: [true, 'Name is required']
    }
}, {
    timestamps: true,
    versionKey: false
});
const userModel = (0, mongoose_1.model)('Users', userSchema);
exports.UserModel = userModel;
