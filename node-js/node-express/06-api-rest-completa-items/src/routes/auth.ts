import { Router } from "express";
import { loginCtrl, registerCtrl } from "../controllers/Auth";

const router: Router = Router();

router.post( '/register', registerCtrl );
router.post( '/login', loginCtrl );

export {
    router
}