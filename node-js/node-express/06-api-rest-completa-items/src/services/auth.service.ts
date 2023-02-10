import { UserModel } from '../models/user';
import { IUser } from '../interfaces/IUser';
import { encrypt, verified } from '../utils/bcrypt.handle';
import { IAuth } from '../interfaces/IAuth';
import { generateToken } from '../utils/jwt.handle';

const registerNewUser = async ( { email, password, name, description }: IUser ) => {
    const existsUser = await UserModel.findOne({ email: email });
    if ( existsUser ) {
        return 'ALREADY_USER';
    }
    const passwordHash = await encrypt( password );
    const registerNewUser = await UserModel.create({
        email: email,
        name: name,
        password: passwordHash,
        description: description
    });
    return registerNewUser;
}

const loginUser = async ({ email, password }: IAuth ) => {
    const existsUser = await UserModel.findOne({ email: email });
    if ( !existsUser ) {
        return 'NOT_FOUND_USER';
    }

    const passwordHash: string = existsUser.password;
    const isCorrect = await verified( password, passwordHash );

    if ( !isCorrect ) {
        return 'PASSWORD_INCORRECT';
    }
    
    const token = await generateToken( existsUser );
    return token;
}

export {
    registerNewUser,
    loginUser
}