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
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || 'secreto.01';
const generateToken = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const id = user._id || user.email;
    const jwt = yield (0, jsonwebtoken_1.sign)({ id }, JWT_SECRET, { expiresIn: '1h' });
    return jwt;
});
exports.generateToken = generateToken;
const verifyToken = (token) => {
    const isOk = (0, jsonwebtoken_1.verify)(token, JWT_SECRET);
    return isOk;
};
exports.verifyToken = verifyToken;
