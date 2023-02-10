"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHttp = void 0;
const handleHttp = (res, error, e) => {
    res.status(500).json({ error: error, message: e });
};
exports.handleHttp = handleHttp;
