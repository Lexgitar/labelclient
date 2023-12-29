
 // "proxy":"http://localhost:3000",
//import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

//import SignUpForm from "../components/forms/SignUpForm"
import ProfileTile from "../components/ProfileTile"
import './pages.css'

import { useSelector } from "react-redux"
import { selectAllLabels } from "../slices/labelsSlice"





 const Labels = () => {

  let labels = useSelector(selectAllLabels)

    return (
      <div className="labels">
        {labels && labels.map(user =>
            <Link key={user._id} to={`${user._id}`}>
                <ProfileTile
                key={user._id}
                user = {user}
                /> 
            </Link>  
    )}
        
          
      </div>
    )
  }
  
  export default Labels