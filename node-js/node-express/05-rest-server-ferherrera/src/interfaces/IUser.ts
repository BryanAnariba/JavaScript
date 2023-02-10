import { IAuth } from "./IAuth";

export interface IUser extends IAuth {
    _id?: string;
    userName: string;
    userLastName: string;
    userImg?: string;
    userRole: string;
    userStatus?: boolean;
    userGoogle?: boolean
    createdAt?: Date;
    updatedAt?: Date;
}
