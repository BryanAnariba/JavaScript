import React from 'react';

import { useAuthContext } from '../../hooks/useAuthContext';
import { useWorkoutContext } from '../../hooks/useWorkoutsContext';

import { deleteWorkout } from '../../services/workouts.service';

export const WorkoutDetail = ({ workOutData }) => {
  const { user } = useAuthContext();
  const { dispatch } = useWorkoutContext();

  const onDeleteWorkout = async ( workoutId ) => {
    const response = await deleteWorkout( workoutId, user.token );
    const jsonResponse = await response.json();

    if ( response.ok ) {
      dispatch({ type: '@delete', payload: workoutId });
      console.log( jsonResponse );
    }
  }

  return (
    <div className="workouts-details">
      <h4>{ workOutData.title }</h4>
      <p>
        <strong>
          Load (kg): 
        </strong>
        { workOutData.load }
      </p>
      <p>
        <strong>
          Reps: 
        </strong>
        { workOutData.reps }
      </p>
      <p>
        <small>
          { workOutData.createdAt }
        </small>
      </p>

      <span onClick={ () => onDeleteWorkout( workOutData._id ) }>
        <i className="fa-solid fa-trash text-danger"></i>
      </span>
    </div>
  )
}
