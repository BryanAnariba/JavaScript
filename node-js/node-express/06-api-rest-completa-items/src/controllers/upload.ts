import { Response } from "express";
import { uploadImage } from "../services/storage.service";
import { handleHttp } from "../utils/error.handle";
import { IRequestExtend } from "../interfaces/IRequestExtend";
import { IStorage } from "../interfaces/IStorage";


export const getFile = async ( req: IRequestExtend, res: Response ) => {
    try {
        const { user, file } = req;
        
        const dataToRegister: IStorage = {
            fileName: `${ file?.filename  }`,
            userId: `${ user?.id }`,
            path: `${ file?.path }`
        }
        // console.log(dataToRegister);
        const uploadSuccess = await uploadImage( dataToRegister );
        return res.status( 200 ).json({ status: 200, data: uploadSuccess, msm: 'OJO ESTA RUTA ES PRIVADA', user: req.user });
    } catch ( e ) {
        handleHttp( res, 'ERROR_CREATE_IMAGE', e );
    }
}