import { NavLink, Outlet } from 'react-router-dom'
import './pages.css'

const Layout = ()=>{

    return(
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
                    <NavLink to='account' className="about">Account</NavLink>                                
                </nav>
            </header>
            <div className="mainWrapper">
                <main className="main">
                    <Outlet/>
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