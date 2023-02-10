import { IUser } from "../interfaces/IUser";
import { UserModel } from "../models/User";

export const saveUser = async ( user: IUser ) => {
    const userModel = new UserModel( user );
    return await userModel.save();
}

export const findUserById = async ( userId: string ) => {
    return await UserModel.findOne({ _id: userId });
}

export const findUser = async ( userEmail: string ) => {
    return await UserModel.findOne({ userEmail: userEmail });
}

export const updateUser = async ( user: IUser, userId: string ) => {
    return await UserModel.findByIdAndUpdate( userId, user, { new: true } );
}

export const findAllUsers = async ( limit: number, skip: number) => {
    // const data = await UserModel.find({ userStatus: true }).limit( limit ).skip( skip );
    // const records = await UserModel.countDocuments({ userStatus: true });

    const promises = await Promise.all([
        UserModel.find({ userStatus: true }).limit( limit ).skip( skip ),
        UserModel.countDocuments({ userStatus: true }),
    ]);

    return promises;
}

export const deleteOneUser = async ( userId: string ) => {
    const user = await findUserById( userId );
    const status = ( user?.userStatus ) ? false : true
    return await UserModel.findOneAndUpdate(
        { _id: userId },
        { userStatus: status }, 
        { new: true }
    );
}