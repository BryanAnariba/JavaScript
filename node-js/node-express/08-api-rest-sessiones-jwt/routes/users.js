import { Router } from "express";

const router = Router();

router.get( '', ( req, res ) => {
    return res.status( 200 ).json({ statusCode: 200, data: 'users works' })
});

export { 
    router 
};