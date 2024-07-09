import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './pages.css'
import Logout from '../components/forms/Logout'

import { useSelector, useDispatch } from 'react-redux'
import {
    //selectError, 
    selectLoggedIn,
    selectUserEdit
} from '../slices/userSlice'

import { fetchRoles } from '../slices/userSlice'
import Errorent from '../components/functional/Errorent'
import SearchBar from '../components/functional/SearchBar'
import FilterTile from '../components/functional/FilterTile'
import CottageIcon from '@mui/icons-material/Cottage';

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PersonIcon from '@mui/icons-material/Person';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

import AutoStoriesIcon from '@mui/icons-material/AutoStories';

import LoginIcon from '@mui/icons-material/Login';


const Layout = () => {
    let dispatch = useDispatch()
    let logged = useSelector(selectLoggedIn)
    let editing = useSelector(selectUserEdit)
    let location = useLocation().pathname
    console.log('location', location)
    //let globalError = useSelector(selectError)
    let goodLocation = location === '/bands' || location === '/labels' || location === '/artists' ? true : false



    useEffect(() => {

        dispatch(fetchRoles())


    }, [])

    return (
        <div className="layout">
            <header className="header">
                <nav className="nav">
                    <NavLink className='home' to='/'>
                        <CottageIcon />
                    </NavLink>
                    <div className="profiles">
                        <NavLink to='labels'>Labels</NavLink>
                        <NavLink to='bands'>Bands</NavLink>
                        <NavLink to='artists'>Artists</NavLink>
                    </div>
                    <NavLink to='about' className="about"><AutoStoriesIcon/></NavLink>
                    <NavLink to='account' className="account">{((logged && editing ) && <ManageAccountsIcon/>)||(logged && <PersonIcon/>) || <PermIdentityIcon/>}</NavLink>
                    {logged ? <Logout /> : <Link to='account/login' className="logbutton"><LoginIcon/></Link>}
                </nav>
            </header>
            <div className="mainWrapper">
                <main className="main">
                    <Errorent />
                    {goodLocation && <> <SearchBar />  <FilterTile /> </>}
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