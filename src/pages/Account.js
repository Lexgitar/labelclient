import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'
import {
    selectLoggedIn,
    
} from '../slices/userSlice'
import UserDetails from '../components/functional/UserDetails'
import DeleteAccount from '../components/functional/DeleteAccount'





const Account = () => {

    
    let logged = useSelector(selectLoggedIn)
    


    if (logged) {

        return (
            <div>
                <UserDetails />
                <DeleteAccount/>
            </div>
        )
    }

    return (
        <div className='account'>
            <Link to='signup'  >Sign up</Link>
            <Link to='login' >Sign in</Link>
            
        </div>
    )
}

export default Account
