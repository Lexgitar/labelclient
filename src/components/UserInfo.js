import { useSelector, useDispatch } from "react-redux"
import { selectInited, selectUser, selectUserEdit, selectUserInfo, toggleEdit } from "../slices/userSlice"
import UserForm from "./forms/UserForm"

const UserInfo = ({ userInfo }) => {
    const dispatch = useDispatch()
    const edit = useSelector(selectUserEdit)
    const user = useSelector(selectUser)
    //   const userInfo = useSelector(selectUserInfo)
    //     console.log('UI', userInfo)
const handleClick=()=>{
    dispatch(toggleEdit(true))
}

    return (
        <div>
            <p>name: {userInfo.name}</p>
            <p>_id: {userInfo._id}</p>
            <p>location: {userInfo.location}</p>
           {edit && <UserForm user={user} userInfo={userInfo} />}
            <button onClick={handleClick} >Edit</button>
        </div>
    )
}

export default UserInfo