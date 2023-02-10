import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../hooks/useAuthContext'
import { useWorkoutContext } from '../../hooks/useWorkoutsContext';

import { createWorkout } from '../../services/workouts.service';

export const CreateWorkout = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { dispatch } = useWorkoutContext();

  const [ title, setTitle ] = useState( '' );
  const [ load, setLoads ] = useState( 0 );
  const [ reps, setReps ] = useState( 0 );
  const [ error, setError ] = useState( '' );
  const [ loading, setLoading ] = useState( false );

  //console.log( user.token );

  const registerWorkout = async (e) => {
    e.preventDefault();
    const workoutData = {
      title: title,
      reps: reps,
      load: load,
    }
    console.log( workoutData );
    
    try {
      setLoading( true );
      const response = await createWorkout( workoutData, user.token );
      const jsonResponse = await response.json();
      console.log( jsonResponse.data.errorMessage );
      if ( !response.ok ) {
        setError( JSON.stringify(jsonResponse.data.errorMessage) )
      } else {
        setError( '' );
        console.log( jsonResponse.data );
        dispatch({ type: '@add', payload: jsonResponse.data });
        navigate( '/workouts' );
      }

    } catch ( error ) {
      console.error( error.message );
      setError( error.message )
    } finally {
      setLoading( false );
    }
  }
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-6 col-md-8 col-sm-12 mx-auto">
          <div className="card">
            <div className="card-header bg-dark text-white text-center">
              <h3>Add New Workout</h3>
            </div>
            <div className="card-body">
              <form onSubmit={ registerWorkout }>
                <div className="form-floating mb-3">
                  <input 
                    type="text" 
                    className="form-control" 
                    id="title" 
                    placeholder="WorkOut Title"
                    onChange={ e => setTitle( e.target.value ) }
                    value={ title }
                  />
                  <label htmlFor="title" className='text-dark'>Complete Workout Title: </label>
                </div>
                <div className="form-floating mb-3">
                  <input 
                    type="number" 
                    className="form-control" 
                    id="load" 
                    placeholder="Load" 
                    onChange={ e => setLoads( e.target.value ) }
                    value={ load }
                  />
                  <label htmlFor="load" className='text-dark'>Loads: </label>
                </div>
                <div className="form-floating mb-3">
                  <input 
                    type="number" 
                    className="form-control" 
                    id="reps" 
                    placeholder="Reps" 
                    onChange={ e => setReps( e.target.value ) }
                    value={ reps }
                  />
                  <label htmlFor="reps" className='text-dark'>Reps: </label>
                </div>
                <div className="form-floating mb-3 text-center">
                  <button 
                    type="submit" 
                    disabled={ loading }
                    className='btn btn-outline-primary btn-block'
                  >Register
                  </button>
                </div>
              </form>
            </div>
            <div className="card-footer bg-dark">
              {
                ( error ) && <div className="alert alert-danger" role="alert">
                  { error }
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
