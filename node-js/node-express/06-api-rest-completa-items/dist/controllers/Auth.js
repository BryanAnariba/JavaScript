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
exports.registerCtrl = exports.loginCtrl = void 0;
const auth_service_1 = require("../services/auth.service");
const error_handle_1 = require("../utils/error.handle");
const registerCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const responseUser = yield (0, auth_service_1.registerNewUser)(body);
        return res.status(201).json({ status: 201, data: responseUser });
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_INSERT_USER', e);
    }
});
exports.registerCtrl = registerCtrl;
const loginCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const credentials = {
            email: req.body.email,
            password: req.body.password
        };
        const responseUser = yield (0, auth_service_1.loginUser)(credentials);
        if (responseUser === 'PASSWORD_INCORRECT' || responseUser === 'NOT_FOUND_USER') {
            return res.status(403).json({
                status: 403,
                data: responseUser
            });
        }
        else {
            return res.status(200).json({
                status: 200,
                data: responseUser
            });
        }
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_LOGIN_USER', e);
    }
});
exports.loginCtrl = loginCtrl;
