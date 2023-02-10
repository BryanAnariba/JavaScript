"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerNewUser = void 0;
const user_1 = require("../models/user");
const bcrypt_handle_1 = require("../utils/bcrypt.handle");
const jwt_handle_1 = require("../utils/jwt.handle");
const registerNewUser = ({ email, password, name, description }) => __awaiter(void 0, void 0, void 0, function* () {
    const existsUser = yield user_1.UserModel.findOne({ email: email });
    if (existsUser) {
        return 'ALREADY_USER';
    }
    const passwordHash = yield (0, bcrypt_handle_1.encrypt)(password);
    const registerNewUser = yield user_1.UserModel.create({
        email: email,
        name: name,
        password: passwordHash,
        description: description
    });
    return registerNewUser;
});
exports.registerNewUser = registerNewUser;
const loginUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const existsUser = yield user_1.UserModel.findOne({ email: email });
    if (!existsUser) {
        return 'NOT_FOUND_USER';
    }
    const passwordHash = existsUser.password;
    const isCorrect = yield (0, bcrypt_handle_1.verified)(password, passwordHash);
    if (!isCorrect) {
        return 'PASSWORD_INCORRECT';
    }
    const token = yield (0, jwt_handle_1.generateToken)(existsUser);
    return token;
});
exports.loginUser = loginUser;
