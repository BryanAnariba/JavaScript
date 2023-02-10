import { Schema, model } from "mongoose";
import { IRole } from '../interfaces/IRole';

const roleSchema = new Schema<IRole>({
    role: {
        type: String,
        required: true,
    }
});

const role = model<IRole>( 'Roles', roleSchema );

export {
    role as RoleModel
}