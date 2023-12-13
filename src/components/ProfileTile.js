import { Link } from "react-router-dom"
import { useState } from "react"
import '../pages/pages.css'

import ProfileDetails from "./ProfileDetails"


const ProfileTile = ({user}) => {

   return(

    <div >
        <p>{user._id}</p>
        <p>{user.name}</p>
        <p>{user.location}</p>
    </div>  
   )
               
              
     
    }
    
   


export default ProfileTile