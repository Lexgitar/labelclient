import {  useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectAllBands } from "../slices/bandsSlice"



const ProfileDetails =  () => {
    let bands = useSelector(selectAllBands)
  
    const {id} = useParams()
     const user = bands.filter(function(user){        
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