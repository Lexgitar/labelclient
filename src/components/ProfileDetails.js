import {  useParams } from "react-router-dom"
import { users } from "../pages/Bands"


const ProfileDetails =  () =>{
  
    const {id} = useParams()
     const user = users.filter(function(user){        
         return user._id == id
     })[0]
   
        

        
  

    return (
        <div key = {user._id}>
            <p>_id:{user._id}</p>
            <p>id:{id}</p>
            <p>name: {user.name}</p>
            <p>location:{user.location}</p>
        </div>
    )
}

export default ProfileDetails