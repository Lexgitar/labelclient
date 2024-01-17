import { useParams, useLocation, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { selectRoles, selectUser } from "../slices/userSlice"

import { attachUser, detachUser, selectUserInfo, selectLoggedIn } from '../slices/userSlice'



const ProfileDetails = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    //  
    const loggedIn = useSelector(selectLoggedIn)
    const userRole = useSelector(selectUser).role
    const userRoleInfo = useSelector(selectUserInfo)
    //console.log(userRole)
    //
    let bands = useSelector(selectRoles).bands
    let labels = useSelector(selectRoles).labels
    //
    const { id } = useParams()
    let usersPool = useLocation().pathname.includes('labels') ? labels : bands
    let roleFromUrl = useLocation().pathname.includes('labels') ? 'labels' : 'bands'
    let fanRoleCheck = userRole == 'fan' ? false : true
    let byRolechecking = (`${userRole}s` === roleFromUrl) ? false : true
    //console.log(byRolechecking)

    const userProfile = usersPool.filter(function (user) {
        return user._id == id
    })[0]
    //console.log('userkind ', userProfile)

    let notInArrayCheck = userProfile.attachedId.includes(userRoleInfo._id) ? false : true
    //console.log('araycheck ', notInArrayCheck)
    
    const handleAttach = () => {
        if (userRoleInfo && userProfile) {

            const attachId = userRoleInfo._id
            const hostId = userProfile._id 
            console.log('handle attach', attachId, hostId)
            dispatch(attachUser({ roleFromUrl, hostId, attachId }))
            navigate('/')
        }
    
    }

    const handleDetach = () => {
        if (userRoleInfo && userProfile) {

            const attachId = userRoleInfo._id
            const hostId = userProfile._id 
            console.log('handle attach', attachId, hostId)
            dispatch(detachUser({ roleFromUrl, hostId, attachId }))
            navigate('/')
        }
    
    }

    if (userProfile) {
        return (
            <div>
                <p>_id:{userProfile._id}</p>

                <p>name: {userProfile.name}</p>
                <p>location:{userProfile.location}</p>
                <p>atId{userProfile.attachedId}</p>
                {loggedIn &&
                    byRolechecking &&
                    notInArrayCheck &&
                    fanRoleCheck &&
                    <button
                        onClick={handleAttach}
                    >
                        Submit
                    </button>
                }
                {loggedIn &&
                    byRolechecking &&
                    !notInArrayCheck &&
                    fanRoleCheck &&
                    <button onClick={handleDetach}>
                        Detach
                    </button>
                }


            </div>

        )
    }
}

export default ProfileDetails