import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import { RootLayout } from './layouts/RootLayout';
import { HelpLayout } from './layouts/HelpLayout';
import { CareersLayout } from './layouts/CareersLayout';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Faq } from './pages/help/Faq';
import { Contact } from './pages/help/Contact';
import { NotFound } from './pages/NotFound';
import { Careers } from './pages/careers/Careers';
import { CareerDetails } from './pages/careers/CareerDetails';
import { CareersError } from './pages/careers/CareersError';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <RootLayout /> }>
      
      <Route index element={ <Home /> }/>
      <Route path='about' element={ <About /> }/>

      <Route path='help' element={ <HelpLayout/> }>
        <Route path='faq' element={ <Faq /> }/> { /* localhost:5173/help/faq */ }
        <Route path='contact' element={ <Contact /> }/> { /* localhost:5173/help/contact */ }
      </Route>
      
      <Route path='careers' element={ <CareersLayout /> } errorElement={ <CareersError /> }>
        <Route index element={ <Careers /> }/>
        <Route path=':id' element={ <CareerDetails /> } />
      </Route>

      <Route path='*' element={ <NotFound /> }></Route>

    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={ router } />
  )
}

export default App
