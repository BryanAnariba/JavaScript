import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

export const WorkoutRouter = () => {
  return (
    <div className="help-layout">
      <nav>
        <NavLink to='create'>Add Workout</NavLink>
      </nav>

      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}
