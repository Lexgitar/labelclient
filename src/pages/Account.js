import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'
import {
    selectLoggedIn,
    //selectError, 
   // selectApiMsg
} from '../slices/userSlice'
import UserDetails from '../components/functional/UserDetails'
import DeleteAccount from '../components/functional/DeleteAccount'
import Errorent from '../components/functional/Errorent'




const Account = () => {

    // const error = useSelector(selectError)
    let logged = useSelector(selectLoggedIn)
    // let apiMsg = useSelector(selectApiMsg)


    if (logged) {

        return (
            <div>
                <UserDetails />
                <DeleteAccount/>
            </div>
        )
    }

    return (
        <div>
            <Link to='signup'  >Sign up</Link>
            <Link to='login' >Sign in</Link>
            {/* {error && <p>{error}</p>} */}
            {/* <Errorent/> */}
        </div>
    )
}

export default Account