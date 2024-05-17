import { useParams, useLocation, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { selectRoles, selectUser } from "../slices/userSlice"


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
    //
    const { id } = useParams()
    let usersPool = (pathName.includes('labels') ? labels : (pathName.includes('artists') ? artists : bands))
    let roleFromUrl = (pathName.includes('labels') ? 'labels' : (pathName.includes('artists') ? 'artists' : 'bands'))
    let fanRoleCheck = userRole === 'fan' ? false : true
    let byRolechecking = (`${userRole}s` === roleFromUrl) ? false : true
    //console.log(byRolechecking)

    const userProfile = usersPool.filter(function (user) { return user._id === id })[0]
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
                <p>atId's: {userProfile.attachedId}</p>
                {userProfile.genre && <p>genre - {userProfile.genre}</p>}
                <p>about - {userProfile.about}</p>
                <p>links - {userProfile.links}</p>
                {
                    attachCheck() &&
                    <button onClick={handleAttach}>Submit</button>
                }
                {
                    detachCheck() &&
                    <button onClick={handleDetach}>Detach</button>
                }
                <Errorent />
            </div>
        )
    }
}

export default ProfileDetails