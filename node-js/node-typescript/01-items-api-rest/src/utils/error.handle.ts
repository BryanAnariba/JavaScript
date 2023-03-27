import { response } from "express";

const errorHandle = ( res = response, statusCode: number, error: string, errorMessage: string | any ) => {
    return res.status( statusCode ).json({
        statusCode: statusCode,
        data: {
            error: error,
            errorMessage: errorMessage,
        }
    });
}

export {
    errorHandle,
}