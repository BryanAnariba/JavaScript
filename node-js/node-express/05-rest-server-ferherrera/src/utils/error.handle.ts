import { Response } from "express";

const handleHttp = ( status: number, res: Response, error: string, ex: any ) => {
    return res.status( status ).json({ error: error, message: ex });
}

export {
    handleHttp
}