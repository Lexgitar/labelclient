import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './pages.css'
import Logout from '../components/forms/Logout'

import { useSelector, useDispatch } from 'react-redux'
import { selectError, selectLoggedIn } from '../slices/userSlice'

import { fetchRoles } from '../slices/userSlice'
import Errorent from '../components/functional/Errorent'
import SearchBar from '../components/functional/SearchBar'
import FilterTile from '../components/functional/FilterTile'

const Layout = () => {
    let dispatch = useDispatch()
    let logged = useSelector(selectLoggedIn)
    let location = useLocation().pathname
    console.log('location', location)
    let globalError = useSelector(selectError)
    let goodLocation = location === '/bands' || location ==='/labels' ||location === '/artists' ? true : false

    // useEffect(() => {
    //     if(!globalError){
    //         dispatch(fetchRoles())
    //     }
        
    // }, [globalError])
    // //dispatch(fetchRoles())

    useEffect(() => {
      
            dispatch(fetchRoles())
        
        
    }, [])

    return (
        <div className="layout">
            <header className="header">
                <nav className="nav">
                    <NavLink className='home' to='/'>
                        HOME
                    </NavLink>
                    <div className="profiles">
                        <NavLink to='labels'>Labels</NavLink>
                        <NavLink to='bands'>Bands</NavLink>
                        <NavLink to='artists'>Artists</NavLink>
                    </div>
                    <NavLink to='about' className="about">About</NavLink>
                    <NavLink to='account' className="account">Account</NavLink>
                    {logged ? <Logout /> : <Link to='account/login' className="logbutton">Login</Link>}
                </nav>
            </header>
            <div className="mainWrapper">
                <main className="main">
                    <Errorent />
                    {goodLocation  && <> <SearchBar/>  <FilterTile/> </>}
                    <Outlet />

                </main>
            </div>
            <footer className='footer'>
                <div className="wrapper">
                    div(footer)
                </div>
            </footer>

        </div>
    )
}

export default Layout