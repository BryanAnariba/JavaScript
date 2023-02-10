import { JwtPayload } from "jsonwebtoken";
import { Request } from 'express';
import { IUser } from "./IUser";

export interface IRequestExtend extends Request {
    uid?: JwtPayload | string ;
    user?: IUser | null;
}