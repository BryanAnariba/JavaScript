import { RoleModel } from '../models/Role';
import { findUser } from '../services/user.service';
import { UserModel } from '../models/User';

// VERIFICANDO SI EL ROLE ES VALIDO
export const isValidRole = async ( userRole = '' ) => {
    const role = await RoleModel.findOne({ role: userRole });
    if ( !role ) {
        throw new Error( `${ userRole } is not valid.` );
    }
}

// VERIFICAR EXISTENCIA DE CORREO
export const existsEmail = async ( userEmail: string ) => {
    const user = await findUser( userEmail );
    if ( user ) {
        throw new Error( `${ userEmail } already exists.` );
    }
}

// BUSCANDO EL USUARIO ANTES DE ACTUALIZAR
export const findUserById = async ( userId: string ) => {
    const user = await UserModel.findOne({ _id: userId });
    if ( !user ) {
        throw new Error( `The user does not exits` );
    }
}