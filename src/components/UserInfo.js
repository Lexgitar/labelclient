import { useSelector, useDispatch } from "react-redux"
import { selectUser, selectUserEdit,  toggleEdit } from "../slices/userSlice"
import UserForm from "./forms/UserForm"
import DeleteRoleBtn from "./functional/DeleteRoleBtn"
//import DeleteAccount from "./functional/DeleteAccount"

const UserInfo = ({ userInfo }) => {
    const dispatch = useDispatch()
    const edit = useSelector(selectUserEdit)
    const user = useSelector(selectUser)
    //   const userInfo = useSelector(selectUserInfo)
    //     console.log('UI', userInfo)
    const handleClick = () => {
        dispatch(toggleEdit(edit?false:true))
    }

    console.log('Uinfo', userInfo, user)
    return (
        <div className="userInfo">
            <p>Name: {userInfo.name}</p>
            {/* <p>_id: {userInfo._id}</p> */}
            <p>Location: {userInfo.location}</p>
            {edit && <UserForm user={user} userInfo={userInfo} />}
             {<button className="editB" onClick={handleClick} > {edit?'Cancel':'Edit Details'} </button>}
            {userInfo && <DeleteRoleBtn id={userInfo._id} role = {user.role} />}
            {/* {user && <DeleteAccount/>} */}
        </div>
    )
}

export default UserInfo