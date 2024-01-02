import { Link, NavLink, Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import './pages.css'
import Logout from '../components/forms/Logout'

import { useSelector, useDispatch } from 'react-redux'
import { selectLoggedIn } from '../slices/userSlice'

import { fetchRoles } from '../slices/userSlice'

const Layout = () => {
    let dispatch = useDispatch()
    let logged = useSelector(selectLoggedIn)

    useEffect(() => {
        dispatch(fetchRoles())
    }, [])
    //dispatch(fetchRoles())

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
                    </div>
                    <NavLink to='about' className="about">About</NavLink>
                    <NavLink to='account' className="account">Account</NavLink>
                    {logged ? <Logout /> : <Link to='account/login' className="logbutton">Login</Link>}
                </nav>
            </header>
            <div className="mainWrapper">
                <main className="main">
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