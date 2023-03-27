import { Car } from "../interface/Car"
import CarEntity from '../models/Item';

const createCar = async ( carData: Car ) => {
    return await CarEntity.create( carData );
}

const getCars = async (): Promise<Car[]> => {
    return await CarEntity.find({});
}
export {
    createCar,
    getCars,
}