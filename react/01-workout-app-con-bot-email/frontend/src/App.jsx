import './App.css';
import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import { Header } from './layouts/Header';
import { Help } from './layouts/Help';
import { WorkoutRouter } from './layouts/WorkoutRouter';

import { About } from './pages/about/About';
import { Faq } from './pages/help/Faq';
import { Contact } from './pages/help/Contact';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';

import { Workouts } from './components/workouts/Workouts';
import { CreateWorkout } from './components/workouts/CreateWorkout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Header /> }>
    
      <Route index element={ <Home /> }></Route>
    
      <Route path='about' element={ <About /> }></Route>

      <Route path='help' element={ <Help /> }>
        <Route path='faq' element={ <Faq /> }></Route>
        <Route path='contact' element={ <Contact /> }></Route>
      </Route>

      <Route path='workouts' element={ <WorkoutRouter /> }>
        <Route path='' element={ <Workouts /> }></Route>
        <Route path='create' element={ <CreateWorkout /> }></Route>
      </Route>

      <Route path='register' element={ <Signup/> }></Route>
      <Route path='login' element={ <Login/> }></Route>

      <Route path='*' element={ <NotFound /> }></Route>    
    </Route>
  )
);

export const App = () => {
  return (
    <RouterProvider router={ router } />
  )
}
