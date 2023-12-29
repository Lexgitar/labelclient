import {  useParams, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectAllBands } from "../slices/bandsSlice"
import { selectAllLabels } from "../slices/labelsSlice"




const ProfileDetails = () => {
   let bands = useSelector(selectAllBands)
   let labels = useSelector(selectAllLabels)
  
  
    const {id} = useParams()
    let users = useLocation().pathname.includes('labels')?labels : bands
     const user = users.filter(function(user){        
         return user._id == id
     })[0]
   


    return (
        <div key = {user._id}>
            <p>_id:{user._id}</p>
            {/* <p>id:{id}</p> */}
            <p>name: {user.name}</p>
            <p>location:{user.location}</p>
        </div>
    )
}

export default ProfileDetails