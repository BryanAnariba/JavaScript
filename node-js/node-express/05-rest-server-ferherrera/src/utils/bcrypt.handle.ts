import { hash, compare, genSalt } from 'bcryptjs';

export const hashPassword = async ( password: string ): Promise<string> => {
    const salt = await genSalt( 10 );
    const passwordHash = await hash( password, salt );
    return passwordHash;
}

export const verifyPassword = async ( password: string, hashedPassword: string ): Promise<boolean> => {
    return await compare( password, hashedPassword );
}