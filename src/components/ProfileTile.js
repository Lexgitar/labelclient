//import { Link } from "react-router-dom"
//import { useState } from "react"
import '../pages/pages.css'




const ProfileTile = ({profile}) => {


   return(

    <div >
        <p>{profile._id}</p>
        <p>{profile.name}</p>
        <p>{profile.location}</p>
    </div>  
   )
               
              
     
    }
    
   


export default ProfileTile