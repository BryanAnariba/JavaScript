import { Router } from "express";
import { getItems } from "../controllers/order";
import { checkJWT } from "../middlewares/session";

const router: Router = Router();


/*
    ESTA RUTA SOLO ES POSIBLE ACCEDER CUANDO UN USUARIO TENGA SESION ACTIVA CON JWT
*/
router.get( '', [ checkJWT ], getItems );

export {
    router
}