import { useParams, useLocation, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { selectError, selectRoles, selectUser } from "../slices/userSlice"

import OkButton from "./functional/OkButton"

import {
    attachUser,
    detachUser,
    selectUserInfo,
    selectLoggedIn
} from '../slices/userSlice'

import Errorent from "./functional/Errorent"

const ProfileDetails = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    //  
    const loggedIn = useSelector(selectLoggedIn)
    const userRole = useSelector(selectUser).role
    const userRoleInfo = useSelector(selectUserInfo)
    let erorr  = useSelector(selectError)
    //
    let bands = useSelector(selectRoles).bands
    let labels = useSelector(selectRoles).labels
    //
    const { id } = useParams()
    let usersPool = useLocation().pathname.includes('labels') ? labels : bands
    let roleFromUrl = useLocation().pathname.includes('labels') ? 'labels' : 'bands'
    let fanRoleCheck = userRole === 'fan' ? false : true
    let byRolechecking = (`${userRole}s` === roleFromUrl) ? false : true
    //console.log(byRolechecking)

    const userProfile = usersPool.filter(function (user) { return user._id == id })[0]
    //console.log('userkind ', userProfile)

    let notInArrayCheck = userProfile.attachedId.includes(userRoleInfo._id) ? false : true
    //console.log('araycheck ', notInArrayCheck)
    const attachCheck = () => {
        if (loggedIn && byRolechecking &&
            notInArrayCheck &&
            fanRoleCheck && userRoleInfo) {
            return true
        } else {
            return false
        }
    }
    //
    const detachCheck = () => {
        if (loggedIn && byRolechecking &&
            !notInArrayCheck &&
            fanRoleCheck && userRoleInfo) {
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

    if (userProfile) {
        return (
            <div>
                <p>_id:{userProfile._id}</p>
                <p>name: {userProfile.name}</p>
                <p>location:{userProfile.location}</p>
                <p>atId{userProfile.attachedId}</p>
                {
                    attachCheck() &&
                    <button onClick={handleAttach}>Submit</button>
                }
                {
                    detachCheck() &&
                    <button onClick={handleDetach}>Detach</button>
                }
                <Errorent/>
            </div>
        )
    }
}

export default ProfileDetails