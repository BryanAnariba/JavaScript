const mongoose = require( 'mongoose' );
const { Workout } = require( '../models' );

// AQUI SOLO PARA LOS ADMINS PUEDEN VER LOW WORKOUTS AACTIVOS E INACTIVOS REVISAR CUANDO USES EL TOKEN
const getWorkouts = async ( limit, skip, userId ) => {
    return await Workout.find({ userId: mongoose.Types.ObjectId( userId ), workoutStatus: true }).skip( Number( skip ) ).limit( Number( limit ) );
}

// AQUI SOLO PARA LOS ADMINS PUEDEN VER LOW WORKOUTS AACTIVOS E INACTIVOS REVISAR CUANDO USES EL TOKEN
const getWorkouById = async ( userId, workOutId ) => {
    return await Workout.findOne({ _id: mongoose.Types.ObjectId( workOutId ), userId: mongoose.Types.ObjectId( userId ), workoutStatus: true });
}

const getWorkouByIdWithOutStatus= async ( userId, workOutId ) => {
    return await Workout.findOne({ _id: mongoose.Types.ObjectId( workOutId ), userId: mongoose.Types.ObjectId( userId ) });
}

const createNewWorkOut = async ( workout ) => {
    return await Workout.create( workout );
}

const editWorkOut = async ( workout, userId, workOutId ) => {
    return await Workout.findByIdAndUpdate({ _id: workOutId, userId: userId },workout , { new: true });
}

const deleteWorkOut = async ( workOutId, userId ) => {
    let workoutData = await getWorkouByIdWithOutStatus( userId, workOutId );
    //console.log( workoutData )
    workoutData.workoutStatus = !workoutData.workoutStatus;
    //workoutData = { ...workoutData, workoutStatus: !workoutData.workoutStatus }
    return await Workout.findByIdAndUpdate( { _id: mongoose.Types.ObjectId( workOutId ) }, workoutData, { new: true });
}

module.exports = {
    getWorkouts,
    getWorkouById,
    createNewWorkOut,
    editWorkOut,
    deleteWorkOut
}