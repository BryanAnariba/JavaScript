import React from 'react';
import { NavLink } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
        <h2>Page Not Found</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum temporibus, minima fuga cupiditate ullam dolores nemo sapiente fugit velit expedita tempora natus hic rerum, at, nihil earum ab quidem voluptatibus.</p>

        <p>Go to the <NavLink to='/'>Home Page</NavLink></p>
    </div>
  )
}
