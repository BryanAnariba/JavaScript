import React from 'react'
import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';

export const Signup = () => {
  const { error, signup, loading } = useSignup();
  const [ name, setName ] = useState( '' );
  const [ age, setAge ] = useState( 0 );
  const [ email, setEmail ] = useState( '' );
  const [ password, setPassword ] = useState( '' );
  const registerUser = async (e) => {
    e.preventDefault();
    const userData = {
      name: name,
      age: age,
      email: email,
      password: password,
    }
    //console.log( `Clicked-registerUser()` );
    //console.log(userData);

    await signup( userData );

    // RESET FORM
    setName( '' );
    setAge( 0 );
    setEmail( '' );
    setPassword( '' );
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
              <form onSubmit={ registerUser }>
                <div className="form-floating mb-3">
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder="write your name"
                    value={ name }
                    onChange={ e => setName( e.target.value ) } 
                  />
                  <label htmlFor="name" className='text-dark'>Complete Name: </label>
                </div>
                <div className="form-floating mb-3">
                  <input 
                    type="number" 
                    className="form-control" 
                    id="age" 
                    placeholder="write your age" 
                    value={ age }
                    onChange={ e => setAge( e.target.value ) }
                  />
                  <label htmlFor="age" className='text-dark'>Age: </label>
                </div>
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
                  <button type="submit" className='btn btn-outline-primary btn-block' disabled={ loading }>Register</button>
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
