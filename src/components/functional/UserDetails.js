import { useSelector } from "react-redux"
import { selectUser, selectLoggedIn, selectInited, selectRoles, selectUserInfo } from "../../slices/userSlice"

import UserForm from "../forms/UserForm"
import UserInfo from "../UserInfo"
import Logout from "../forms/Logout"


const UserDetails = () => {
    const user = useSelector(selectUser)

    const logged = useSelector(selectLoggedIn)
    const userInfo = useSelector(selectUserInfo)
    console.log('userdets', userInfo)
    if (userInfo) {
        return (
            <div>
                <UserInfo userInfo={userInfo} />
            </div>
        )
    }

    return (
        <div>
            {user && <div>
                <div key={user._id}>
                    {user.email}
                    <p>{user.role}</p>
                </div>

                <div>{`${logged}`}</div>

                <UserForm user={user} />


            </div>
            }
            <Logout />
        </div>
    )
}

export default UserDetails