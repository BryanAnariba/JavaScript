import { JwtPayload } from "jsonwebtoken";
import { Request } from 'express';

export interface IRequestExtend extends Request {
    user?: JwtPayload | { uid: string };
}
