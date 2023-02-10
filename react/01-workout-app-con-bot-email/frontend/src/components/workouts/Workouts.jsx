import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { useAuthContext } from '../../hooks/useAuthContext';
import { useWorkoutContext } from '../../hooks/useWorkoutsContext';

import { getAllWorkOuts } from '../../services/workouts.service';

import { WorkoutDetail } from './WorkoutDetail';

export const Workouts = () => {
  const { user } =  useAuthContext();
  const { workouts, dispatch } = useWorkoutContext();
  const [ isLoading, setIsLoading ] = useState( false );

  useEffect(() => {
    if ( user ) {
        setIsLoading( true );
        getAllWorkOuts( user.token )
        .then( response => response.json() )
        .then( jsonResponse => {
          console.log( jsonResponse );
          dispatch({ type: '@get', payload: jsonResponse.data });
          setIsLoading( false );
        })
        .catch( error => { 
          console.error( error );
          setIsLoading( false );
        });
    }
  }, [ user, dispatch ]);

  return (
    <div className="container">
      <div className="row mt-5">
        {
          ( isLoading )
          ?
            <div className="alert alert-primary" role="alert">
              Loading...
            </div>
          :
          <div className="col-lg-8 mx-auto text-center">
            <ul>
              {
                workouts.map( workout => ( <WorkoutDetail key={ workout._id } workOutData={ workout }/> ) )
              }
            </ul>
          </div>
        }
      </div>
    </div>
  )
}
