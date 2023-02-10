import { sign, verify } from 'jsonwebtoken';
import { IUser } from '../interfaces/IUser';

const JWT_SECRET = process.env.JWT_SECRET || 'secreto.01';

const generateToken = async ( user: IUser ) => {
    
    const id: string | undefined = user._id || user.email;
    const jwt = await sign( { id }, JWT_SECRET, { expiresIn: '1h' } );

    return jwt;

}

const verifyToken = ( token: string ) => {
    const isOk = verify( token, JWT_SECRET );
    return isOk;
}

export {
    generateToken,
    verifyToken,
}