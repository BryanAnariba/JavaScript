"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMiddleware = void 0;
const logMiddleware = (req, res, next) => {
    const userAgent = req.headers["user-agent"];
    console.log({ userAgent });
    next();
};
exports.logMiddleware = logMiddleware;
