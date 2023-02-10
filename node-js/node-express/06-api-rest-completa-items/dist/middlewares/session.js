"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJWT = void 0;
const jwt_handle_1 = require("../utils/jwt.handle");
const checkJWT = (req, res, next) => {
    try {
        const jwt = req.headers.authorization || '';
        const token = jwt.split(' ').pop(); // se puede split( ' ' )[1]
        const isUser = (0, jwt_handle_1.verifyToken)(`${token}`);
        if (!isUser) {
            return res.status(401).json({ status: 401, data: 'Unauthorized Request: Necesitas un token valido' });
        }
        else {
            req.user = isUser;
            next();
        }
    }
    catch (e) {
        console.log(e);
        return res.status(401).json({ status: 401, data: 'Unauthorized Request: Necesitas un token valido' });
    }
};
exports.checkJWT = checkJWT;
