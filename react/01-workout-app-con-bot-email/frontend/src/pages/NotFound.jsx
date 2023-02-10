import React from 'react';
import { NavLink } from 'react-router-dom';
import notFound from '../assets/images/not-found.svg';

export const NotFound = () => {
  return (
    <div className="container">
        <div className="row mt-5">
            <div className="col-lg-6 col-md-8 col-sm-12 mx-auto text-center">
                <img src={ notFound } alt="Not Found Page" className='img-fluid'/>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 mx-auto text-center">
                <NavLink className="btn btn-danger" to='/'>Go Home</NavLink>
            </div>
        </div>
    </div>
  )
}
