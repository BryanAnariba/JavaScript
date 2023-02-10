import { useReducer } from 'react';
import { createContext } from 'react';
import { workoutReducer } from '../reducers/workoutReducer';

export const WorkoutContext = createContext();

export const WorkoutContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer( workoutReducer, {
        workouts: []
    });

    return (
        <WorkoutContext.Provider value={ {...state, dispatch} }>
            {
                children
            }
        </WorkoutContext.Provider>
    )
}
