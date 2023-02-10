import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  //console.log(user);
  const handleLogout = () => {
    logout();
    navigate( '/' );
  }
  return (
    <div className="root-layout">
        <header>
            <nav>
                <h1>Workouts!</h1> { /* SI EL USUARIO ESTA LOGUEADO Welcome Bryan SI NO Gym */ }
                <div className="mx-auto my-auto">
                  <NavLink to='/' >Home</NavLink>
                  <NavLink to='about'>About</NavLink>
                  <NavLink to='help'>Help</NavLink>
                  <NavLink to='workouts'>Workouts</NavLink>
                </div>
                <div className="ml-auto my-auto">
                  {
                    ( !user )
                    ?
                      <>
                        <NavLink to='login'>Login</NavLink>
                        <NavLink to='register'>Sign Up</NavLink>
                      </>
                    :
                      <>
                        <span>
                          <small>{ user.user.email }</small>
                        </span>
                        &nbsp;
                        <a onClick={ handleLogout } className='btn btn-outline-danger btn-sm'>
                          Log Out
                        </a>
                      </> 
                  }
                </div>
            </nav>
            {/* BREADCRUMBS */}
        </header>
        <main>
            <div className="container mt-4">
            <Outlet />
            </div>
        </main>
    </div>
  )
}
