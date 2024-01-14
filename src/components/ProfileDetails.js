import { useParams, useLocation, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { selectRoles } from "../slices/userSlice"

import { attachUser, selectUserInfo, selectLoggedIn } from '../slices/userSlice'


const ProfileDetails = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
//if logged see button
    const loggedIn = useSelector(selectLoggedIn)
//if not submitted see button
//if role not same see button

    let bands = useSelector(selectRoles).bands
    let labels = useSelector(selectRoles).labels

        const userInfo = useSelector(selectUserInfo)

    const { id } = useParams()
    let users = useLocation().pathname.includes('labels') ? labels : bands
    const user =  users.filter(function (user) {
        return user._id == id
    })[0]

    const attachId = userInfo._id
    const hostId = user._id
    const handleAttach = () => {
        console.log('handle attach', attachId, hostId)
       dispatch(attachUser({hostId, attachId }))
        navigate('/')

    }

    if (user) {
        return (
            <div>
                <p>_id:{user._id}</p>

                <p>name: {user.name}</p>
                <p>location:{user.location}</p>
               {loggedIn && <button 
               onClick={handleAttach}
               >Submit</button>}
                <p>{userInfo._id}</p>
            </div>

        )
    }
}

export default ProfileDetails