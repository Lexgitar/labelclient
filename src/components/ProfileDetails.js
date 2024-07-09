import { useEffect, useState } from 'react';

import CommentsDisabledIcon from '@mui/icons-material/CommentsDisabled';
import CommentIcon from '@mui/icons-material/Comment';


import { useParams, useLocation, useNavigate, } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { selectRoles, selectUser } from "../slices/userSlice"


import {
    attachUser,
    detachUser,
    selectUserInfo,
    selectLoggedIn
} from '../slices/userSlice'

//import Errorent from "./functional/Errorent"
import FindRole from "./functional/FindRole"
import Pcomments from "../pages/Pcomments"

const ProfileDetails = () => {
    const [bubble, setBubble] = useState(false)
    const handleBubble = () => {

        !bubble ? setBubble(true) : setBubble(false)

    }


    const dispatch = useDispatch()
    const navigate = useNavigate()
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
                        console.log('deta', value.payload)
                    } else if (!value.error && value.payload) {
                        console.log(value.payload)
                        navigate('/')
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
                        console.log('deta', value.payload)
                    } else if (!value.error && value.payload) {
                        console.log(value.payload)
                        navigate('/')
                    }
                }
            )

        }

    }


    return (
        <div >
            {(userProfile !== undefined &&


                <div key={userProfile._id}> profiledetails
                    <p>_id:{userProfile._id}</p>
                    <p>name: {userProfile.name}</p>
                    <p>location:{userProfile.location}</p>

                    {userProfile.genre && <p>genre - {userProfile.genre}</p>}

                    <p>about - {userProfile.about}</p>
                    <a  href={userProfile.links.includes('http')?`${userProfile.links}`:`http://${userProfile.links}`} target='_blank' rel="noopener noreferrer">link - {userProfile.links}</a>

                    {(userProfile.attachedId !== undefined) && userProfile.attachedId.map(id => {
                        return <FindRole key={id} id={id} />
                    })}
                    {
                        attachCheck() &&
                        <button onClick={handleAttach}>Submit</button>
                    }
                    {
                        detachCheck() &&
                        <button onClick={handleDetach}>Detach</button>
                    }
                    {/* <Errorent /> */}
                    {!bubble && <CommentIcon onClick={handleBubble} />}
                    {bubble && <CommentsDisabledIcon onClick={handleBubble} />}

                    {bubble && <Pcomments  id={id} bubble={bubble} />}

                </div>) || 'Loading...'

            }
        </div>


    )

}

export default ProfileDetails