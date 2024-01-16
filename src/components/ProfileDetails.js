import { useParams, useLocation, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { selectRoles, selectUser } from "../slices/userSlice"

import { attachUser, selectUserInfo, selectLoggedIn } from '../slices/userSlice'


const ProfileDetails = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
//if logged see button
    const loggedIn = useSelector(selectLoggedIn)
//if not submitted see button
//if role not same see button
    let userRole = useSelector(selectUser).role
    console.log(userRole)
   

    let bands = useSelector(selectRoles).bands
    let labels = useSelector(selectRoles).labels
    
    const userInfo = useSelector(selectUserInfo) 
    //console.log('userinfo ', userInfo)

    const { id } = useParams()
    let usersPool = useLocation().pathname.includes('labels') ? labels : bands
    let urlRole = useLocation().pathname.includes('labels')? 'labels' : 'bands'

    let byRolechecking = (`${userRole}s` == urlRole)? false : true
    //console.log(byRolechecking)

    const userKind =  usersPool.filter(function (user) {
        return user._id == id
    })[0]
    //console.log('userkind ', userKind)

    let notInArrayCheck = userKind.attachedId.includes(userInfo._id)? false : true
    //console.log('araycheck ', notInArrayCheck)
    
    const handleAttach = () => {
        if(userInfo && userKind){
            const attachId = userInfo._id
            const hostId = userKind._id
        console.log('handle attach', attachId, hostId)
        dispatch(attachUser({urlRole, hostId, attachId }))
        navigate('/')
        }
        

    }

    if (userKind) {
        return (
            <div>
                <p>_id:{userKind._id}</p>

                <p>name: {userKind.name}</p>
                <p>location:{userKind.location}</p>
                <p>atId{userKind.attachedId}</p>
               {loggedIn && byRolechecking && notInArrayCheck && <button 
               onClick={handleAttach}
               >Submit</button>
               }
                <p>{userInfo._id}</p>
                
            </div>

        )
    }
}

export default ProfileDetails