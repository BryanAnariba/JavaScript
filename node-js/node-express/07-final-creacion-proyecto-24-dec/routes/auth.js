const { Router } = require("express");
const { logIn, signUp } = require("../controllers/Auth");
const { validatorRegisterUser, validatorLoginUser } = require("../validators/auth.validator");

const router = Router();

router.post( 
    '/register', 
    [ validatorRegisterUser ],
    signUp
);

router.post( 
    '/login',
    [ validatorLoginUser ],
    logIn
);

module.exports = router;