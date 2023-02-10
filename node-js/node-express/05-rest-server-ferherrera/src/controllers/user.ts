import { Request, Response } from 'express';
import { IUser } from '../interfaces/IUser';
import { saveUser, updateUser, findAllUsers, deleteOneUser } from '../services/user.service';
import { handleHttp } from '../utils/error.handle';
import { hashPassword } from '../utils/bcrypt.handle';
import { IRequestExtend } from '../interfaces/IRequestExtend';

const findAll = async ( req: Request, res: Response ) => {
    const { limit = 5, skip = 0 } = req.query; // localhost:3500/api/users?limit=10&skip=2
    try {
        //const userServiceResponse = await findAllUsers( Number(limit), Number(skip) );
        const [ data, records ] = await findAllUsers( Number(limit), Number(skip) );
        // RESPONDEMOS
        return res.status( 200 ).json({ status: 200, data: { users: data, records: records }});
    } catch ( error ) {
        handleHttp( 500, res, 'HTTP_GET_USERS_ERROR', error );
    }
}

const findOne = async ( req: Request, res: Response ) => {
    const { userId } = req.params;
    return res.status( 200 ).json({ status: 200, data: userId })
}

const createOne = async ( req: Request, res: Response ) => {
    let { userName, userLastName, userEmail, userPassword, userImg = '', userRole }: IUser = req.body;
    try {
        // ENCRIPTAR LA CLAVE
        userPassword = await hashPassword( userPassword );

        // GUARDAMOS EN LA BASE
        const userServiceResponse = await saveUser({
            userName,
            userLastName,
            userEmail,
            userPassword,
            userImg,
            userRole
        });

        // RESPONDEMOS
        return res.status( 200 ).json({ status: 200, data: userServiceResponse });
    } catch ( error ) {
        handleHttp( 500, res, 'HTTP_CREATE_USER_ERROR', error );
    }
}

const editOne = async ( req: IRequestExtend, res: Response ) => {
    try {
        const { userId } = req.params;
        let { userPassword, userGoogle, userEmail, ...rest } = req.body;
    
        //console.log({ userLogged: req.uid });

        // SI VIENE EL PASS ENTONCES QUIERE MODIFICARLA
        if ( userPassword ) { 
            userPassword = await hashPassword( userPassword );
            rest.userPassword = userPassword;
        }

        const userServiceResponse = await updateUser( rest, userId );
        return res.status( 200 ).json({ status: 200, data: { modifiedData: userServiceResponse, userLogged: req.user }});
    } catch ( error ) {
        return handleHttp( 500, res, 'HTTP_UPDATE_USER_ERROR', error );
    }
}

const deleteOne = async ( req: Request, res: Response ) => {
    const { userId } = req.params;
    try {
        const userServiceResponse = await deleteOneUser( userId );
        return res.status( 200 ).json({ status: 200, data: userServiceResponse });
    } catch ( error ) {
        handleHttp( 500, res, 'HTTP_DELETE_USER_ERROR', error );
    }
}

export {
    findAll,
    findOne,
    createOne,
    editOne,
    deleteOne
};
