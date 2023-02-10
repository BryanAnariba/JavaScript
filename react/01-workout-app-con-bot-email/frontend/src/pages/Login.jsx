import React from 'react'
import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  
  const navigate = useNavigate();
  const { login, error, logget } = useLogin();

  const [ email, setEmail ] = useState( '' );
  const [ password, setPassword ] = useState( '' );

  const loginUser = async ( e ) => {
    e.preventDefault();
    const userCredentials = {
      email: email,
      password: password
    };
    // console.log( `Clicked-loginUser()` );
    // console.log(userCredentials);
    await login( userCredentials );
    
    // RESET FORM
    setEmail( '' );
    setPassword( '' );
    //navigate( '/workouts' );
    
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-8 col-sm-12 mx-auto">
          <div className="card">
            <div className="card-header bg-dark text-white text-center">
              <h3>Register new user</h3>
            </div>
            <div className="card-body">
              <form onSubmit={ loginUser }>
                <div className="form-floating mb-3">
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="name@example.com" 
                    value={ email }
                    onChange={ e => setEmail( e.target.value ) }
                  />
                  <label htmlFor="email" className='text-dark'>Email address: </label>
                </div>
                <div className="form-floating mb-3">
                  <input 
                  type="password" 
                    className="form-control" 
                    id="password" 
                    placeholder="Password" 
                    value={ password }
                    onChange={ e => setPassword( e.target.value ) }
                  />
                  <label htmlFor="password" className='text-dark'>Password: </label>
                </div>
                <div className="form-floating mb-3 text-center">
                  <button type="submit" className='btn btn-outline-primary btn-block'>Login</button>
                </div>
              </form>
            </div>
            <div className="card-footer bg-dark">
              {
                ( error !== '' ) && <div className="alert alert-danger" role="alert">
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
