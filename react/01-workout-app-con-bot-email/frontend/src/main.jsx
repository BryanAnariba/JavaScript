import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'

import { AuthContextProvider } from './context/AuthContext';
import { WorkoutContextProvider } from './context/WorkoutContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <WorkoutContextProvider>
      <App/>
    </WorkoutContextProvider>
  </AuthContextProvider>
);
