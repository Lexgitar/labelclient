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
    let pathNew = profile.role


    console.log('PTile', profile)
    console.log('patnew', pathNew)
    return (

        <div >
            <Link key={profile.id} to={`${profile._id}`}>
                <p>id: {profile._id}</p>
                <p>name: {profile.name}</p>
                <p>location: {profile.location}</p>
                <p>genre: {profile.genre}</p>
                <p>abot: {profile.about}</p>
                <p>links: {profile.links}</p>
                <p>role: {profile.role}</p>
            </Link>
            {!!profile.attachedId.length && profile.attachedId.map((id) => (

                <Link to={`/${pathNew}s/${id}`} key={id}>id:{id}</Link>


            ))}

        </div>
    )



}




export default ProfileTile