import { WorkoutContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutContext = () => {
    const context = useContext( WorkoutContext );

    if ( !context ) {
        throw new Error( 'useWorkoutContext debe ser usado dentro del useWorkoutContextProvider' );
    }

    
    return context;
}