import { useEffect, useState } from 'react';

import CommentsDisabledIcon from '@mui/icons-material/CommentsDisabled';
import CommentIcon from '@mui/icons-material/Comment';


import { useParams, useLocation, 
   // useNavigate,
 } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { addError, selectRoles, selectUser } from "../slices/userSlice"


import {
    attachUser,
    detachUser,
    selectUserInfo,
    selectLoggedIn
} from '../slices/userSlice'

//import Errorent from "./functional/Errorent"
//import FindRole from "./functional/FindRole"
import DetailsTile from './DetailsTile';
import Pcomments from "../pages/Pcomments"

const ProfileDetails = () => {
    const [bubble, setBubble] = useState(false)
    const handleBubble = () => {

        !bubble ? setBubble(true) : setBubble(false)

    }

 

    const dispatch = useDispatch()
   // const navigate = useNavigate()
    let pathName = useLocation().pathname
    //  
    const loggedIn = useSelector(selectLoggedIn)
    const userRole = useSelector(selectUser).role
    const userRoleInfo = useSelector(selectUserInfo)
    //let erorr  = useSelector(selectError)
    //
    let bands = useSelector(selectRoles).bands
    let labels = useSelector(selectRoles).labels
    let artists = useSelector(selectRoles).artists
    let fans = useSelector(selectRoles).fans

    const { id } = useParams()
    console.log('useparams', id)

    useEffect(() => {
        setBubble(false)
    }, [id])

    let usersPool = (pathName.includes('labels') ? labels : (pathName.includes('artists') ? artists : (pathName.includes('fans') ? fans : bands)))
    let roleFromUrl = (pathName.includes('labels') ? 'labels' : (pathName.includes('artists') ? 'artists' : (pathName.includes('fans') ? 'fans' : 'bands')))
    let fanRoleCheck = userRole === 'fan' ? false : true
    let byRolechecking = (`${userRole}s` === roleFromUrl) ? false : true

    const userProfile = usersPool.filter(function (user) { return user._id === id })[0]
    //console.log('userkind ', userProfile)

    let notInArrayCheck = userProfile && userProfile.attachedId ? (userProfile.attachedId.includes(userRoleInfo._id) ? false : true) : false


    const attachCheck = () => {
        if (loggedIn && byRolechecking &&
            notInArrayCheck &&
            fanRoleCheck && userRoleInfo && userProfile.role !== 'fan') {
            return true
        } else {
            return false
        }
    }
    //
    const detachCheck = () => {
        if (loggedIn && byRolechecking &&
            !notInArrayCheck &&
            fanRoleCheck && userRoleInfo && userProfile.role !== 'fan') {
            return true
        } else {
            return false
        }
    }
    //
    const handleAttach = () => {
        if (userRoleInfo && userProfile) {

            const attachId = userRoleInfo._id
            const hostId = userProfile._id
            console.log('handle attach', attachId, hostId)
            dispatch(attachUser({ roleFromUrl, hostId, attachId })).then(
                value => {
                    if (value.error) {
                        //console.log('deta', value.payload)
                        dispatch(addError(value.error))
                    } else if (!value.error && value.payload) {
                        console.log(value.payload)
                        //navigate('/')
                    }
                }
            )

        }

    }

    const handleDetach = () => {
        if (userRoleInfo && userProfile) {

            const attachId = userRoleInfo._id
            const hostId = userProfile._id
            console.log('handle detach', attachId, hostId)
            dispatch(detachUser({ roleFromUrl, hostId, attachId })).then(
                value => {
                    if (value.error) {
                        //console.log('deta', value.payload)
                        dispatch(addError(value.error))
                    } else if (!value.error && value.payload) {
                        //console.log(value.payload)
                        //navigate('/')
                    }
                }
            )

        }

    }


    return (
        <div className='profileDetails'>
            {(userProfile !== undefined &&


                <div key={userProfile._id}> 
                    <div className='pdOne'>
                        <DetailsTile userProfile={userProfile}/>
                        
                        {
                            attachCheck() &&
                            <button onClick={handleAttach}>Collab</button>
                        }
                        {
                            detachCheck() &&
                            <button onClick={handleDetach}>Uncollab</button>
                        }
                    </div>
                    <div className='pdTwo'>
                    {/* <Errorent /> */}
                    {!bubble && <CommentIcon onClick={handleBubble} />}
                    {bubble && <CommentsDisabledIcon onClick={handleBubble} />}

                    {bubble && <Pcomments id={id} bubble={bubble} />}
                    </div>
                </div>) || 'Loading...'

            }
        </div>


    )

}

export default ProfileDetails