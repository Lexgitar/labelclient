import { useSelector } from "react-redux"
import { selectUser, selectLoggedIn } from "../../slices/userSlice"

import Logout from "../forms/Logout"


const UserDetails = () => {
    const user = useSelector(selectUser)
    const logged = useSelector(selectLoggedIn)
  return (
    <div>
        {user && (<div>
                    <div key={user._id}>{user.email}</div>
                    <div>{`${logged}`}</div>
                    <Logout/>
                 </div>
        )}
    </div>
  )
}

export default UserDetails