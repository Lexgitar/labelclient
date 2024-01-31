import { Link, useLocation,  } from "react-router-dom"
//import { useState } from "react"
import '../pages/pages.css'
// import { selectRoles } from '../slices/userSlice'
// import { useSelector } from 'react-redux'






const ProfileTile = ({ profile }) => {

    // let bands = useSelector(selectRoles).bands
    // let labels = useSelector(selectRoles).labels

    //let usersPool = useLocation().pathname.includes('labels') ? labels : bands
    let path = useLocation().pathname.includes('labels') ? 'bands' : 'labels'


    console.log('PTile', profile)
    return (

        <div >
            <Link key={profile.id} to={`${profile._id}`}>
                <p>{profile._id}</p>
                <p>{profile.name}</p>
                <p>{profile.location}</p>
            </Link>
            {!!profile.attachedId.length && profile.attachedId.map((id) => (

                <Link to={`/${path}/${id}`} key={id}>id:{id}</Link>


            ))}

        </div>
    )



}




export default ProfileTile