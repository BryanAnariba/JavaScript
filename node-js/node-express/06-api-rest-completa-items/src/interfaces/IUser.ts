import { IAuth } from './IAuth';

export interface IUser extends IAuth {
    _id?: string;
    name: string;
    description: string;
}