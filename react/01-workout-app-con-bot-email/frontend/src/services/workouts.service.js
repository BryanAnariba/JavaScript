import { API } from "./config"

export const getAllWorkOuts = async ( token ) => {
    return await fetch( `${ API.endPoint }/api/workouts`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ token.trim() }`,
        }
    });
}

export const getOneWorkout = async ( token, workoutId ) => {
    return await fetch( `${ API.endPoint }/api/workouts/${ workoutId }`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ token.trim() }`,
        },
    });
}

export const createWorkout = async ( workoutData, token ) => {
    return await fetch( `${ API.endPoint }/api/workouts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ token.trim() }`
        },
        body: JSON.stringify( workoutData ),
    });
}

export const deleteWorkout = async ( workoutId, token ) => {
    return await fetch( `${ API.endPoint }/api/workouts/${ workoutId }`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ token.trim() }`,
        }
    });
}