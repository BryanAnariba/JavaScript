"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const upload_1 = require("../controllers/upload");
const multer_middleware_1 = require("../middlewares/multer.middleware");
const session_1 = require("../middlewares/session");
const router = (0, express_1.Router)();
exports.router = router;
router.post('', [
    session_1.checkJWT,
    multer_middleware_1.multerMiddleware.single('file')
], upload_1.getFile);
