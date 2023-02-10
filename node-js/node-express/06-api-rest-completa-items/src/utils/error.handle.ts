import { Response } from "express";

const handleHttp = ( res: Response, error: string, e: any ) => {
    res.status( 500 ).json({ error: error, message: e });
}

export { handleHttp };