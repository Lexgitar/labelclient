import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

//
import Layout from './pages/Layout'
import Home from './pages/Home';
import ProfileDetails from './components/ProfileDetails';
//import FilterTile from './components/functional/FilterTile';

import Labels from './pages/Labels';
import Bands from './pages/Bands';
import About from './pages/About';
import Account from './pages/Account';
import SignUpForm from './components/forms/SignUpForm';
import LoginForm from './components/forms/LoginForm';
//import UserDetails from './components/functional/UserDetails';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route index element={<Home />} />
      <Route path='labels' element={<Labels />} />
      <Route path='labels/:id' element={<ProfileDetails />} />

      <Route path='bands' element={<Bands />} />
      <Route path='bands/:id' element={<ProfileDetails />} />

      <Route path='about' element={<About />} />
      <Route path='account' element={<Account />} />
      <Route path='account/signup' element={<SignUpForm />} />
      <Route path='account/login' element={<LoginForm />} />


    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  );

}

export default App;
