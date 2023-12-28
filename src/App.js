import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';

//
import Layout from './pages/Layout'
import Home from './pages/Home';
import ProfileDetails from './components/ProfileDetails';
import FilterTile from './components/functional/FilterTile';

import Labels from './pages/Labels';
import Bands from './pages/Bands';
import About from './pages/About';
import Account from './pages/Account';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>} >
      <Route index element={<Home/>} />
      <Route path='labels' element={<><FilterTile/><Labels/></>}/>
        <Route path='labels/:id' element={<ProfileDetails/>} />
     
      <Route path='bands' element={<><FilterTile/><Bands/></>}/>
        <Route path='bands/:id' element={<ProfileDetails/>} />
      
      <Route path='about' element={<About/>} />
      <Route path='account' element={<Account/>} />
    </Route>
  )
)

function App() {
  
    return (
      <RouterProvider router={router} />
    );
  
}

export default App;
