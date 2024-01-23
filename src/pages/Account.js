import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'
import {
    selectLoggedIn,
    selectError
} from '../slices/userSlice'
import UserDetails from '../components/functional/UserDetails'



const Account = () => {

    const error = useSelector(selectError)
    let logged = useSelector(selectLoggedIn)


    if (logged) {

        return (
            <div>
                <UserDetails />
            </div>
        )
    }

    return (
        <div>
            <Link to='signup'  >Sign up</Link>
            <Link to='login' >Sign in</Link>
            {error && <p>{error}</p>}
        </div>
    )
}

export default Account