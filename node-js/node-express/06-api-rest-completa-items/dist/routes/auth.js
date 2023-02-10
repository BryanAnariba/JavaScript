"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const Auth_1 = require("../controllers/Auth");
const router = (0, express_1.Router)();
exports.router = router;
router.post('/register', Auth_1.registerCtrl);
router.post('/login', Auth_1.loginCtrl);
