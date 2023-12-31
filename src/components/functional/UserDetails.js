import { useSelector } from "react-redux"
import { selectUser, selectLoggedIn, selectInited } from "../../slices/userSlice"

import UserForm from "../forms/UserForm"
import UserInfo from "../UserInfo"
import Logout from "../forms/Logout"


const UserDetails = () => {
    const user = useSelector(selectUser)
    const logged = useSelector(selectLoggedIn)
    const inited = useSelector(selectInited)
    if(inited){
        return (
            <div>
                <UserInfo/>
            </div>
        )
    }

    return (
        <div>
            {user && <div>
                <div key={user._id}>{user.email}</div>
                <div>{`${logged}`}</div>

                <UserForm user={user} />
                
               
            </div>
            }
             <Logout />
        </div>
    )
}

export default UserDetails