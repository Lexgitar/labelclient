
import './cardsAndMore.css'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

import { Tooltip } from "react-tooltip";
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

//keep [ ]
    },[])

    return (
        <div className="layout">
            <header className="header">
                <nav className="nav">
                    <NavLink
                        data-tooltip-id="my-hometooltip"
                        data-tooltip-content="HOME"
                        data-tooltip-place="bottom"
                        className='home' to='/'>
                        <CottageIcon />
                        <Tooltip id="my-hometooltip" />
                    </NavLink>
                    <div className="profiles">
                        <NavLink
                            data-tooltip-id="my-labtooltip"
                            data-tooltip-content="Labels"
                            data-tooltip-place="bottom"
                            to='labels'>Labels
                            <Tooltip id="my-labtooltip" />
                        </NavLink>

                        <NavLink
                            data-tooltip-id="my-bantooltip"
                            data-tooltip-content="Bands"
                            data-tooltip-place="bottom"
                            to='bands'>Bands
                            <Tooltip id="my-bantooltip" />
                        </NavLink>

                        <NavLink
                            data-tooltip-id="my-arttooltip"
                            data-tooltip-content="Artists"
                            data-tooltip-place="bottom"
                            to='artists'>Artists
                            <Tooltip id="my-arttooltip" />
                        </NavLink>

                    </div>
                    <NavLink
                        data-tooltip-id="my-abtooltip"
                        data-tooltip-content="About"
                        data-tooltip-place="bottom"
                        to='about' className="about">
                        <AutoStoriesIcon />
                        <Tooltip id="my-abtooltip" />
                    </NavLink>
                    <NavLink
                        data-tooltip-id="my-acctooltip"
                        data-tooltip-content="Account"
                        data-tooltip-place="bottom"

                        to='account' className="account">
                        {((logged && editing) && <ManageAccountsIcon />) || (logged && <PersonIcon />) || <PermIdentityIcon />}
                        <Tooltip id="my-acctooltip" />
                    </NavLink>
                    {logged ? <Logout /> : <Link
                        data-tooltip-id="my-logintooltip"
                        data-tooltip-content="Login"
                        data-tooltip-place="bottom"
                        to='account/login' className="logbutton">
                        <LoginIcon />
                        <Tooltip id="my-logintooltip" />
                    </Link>}
                </nav>
            </header>
            <div className="mainWrapper">
                <main className="main">
                    <Errorent />
                    {goodLocation && 
                        <div className='filters'> 
                            <SearchBar /> <FilterTile /> 
                        </div>}
                    <Outlet />

                </main>
            </div>
            <footer className='footer'>
                <div className="wrapper">
                &copy;Lexgitar
                </div>
            </footer>

        </div>
    )
}

export default Layout