import { useParams, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectRoles } from "../slices/userSlice"




const ProfileDetails = () => {
    let bands = useSelector(selectRoles).bands
    let labels = useSelector(selectRoles).labels


    const { id } = useParams()
    let users = useLocation().pathname.includes('labels') ? labels : bands
    const user =  users.filter(function (user) {
        return user._id == id
    })[0]


    if (user) {
        return (
            <div>
                <p>_id:{user._id}</p>

                <p>name: {user.name}</p>
                <p>location:{user.location}</p>
            </div>

        )
    }
}

export default ProfileDetails