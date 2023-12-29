
 // "proxy":"http://localhost:3000",
//import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

//import SignUpForm from "../components/forms/SignUpForm"
import ProfileTile from "../components/ProfileTile"
import FilterTile from "../components/functional/FilterTile"
import './pages.css'

import { useSelector } from "react-redux"
import { selectAllBands } from "../slices/bandsSlice"




 const Bands = () => {

  let bands = useSelector(selectAllBands)

 
    return (
      <div className="bands">
        {bands && bands.map(user =>
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
  
  export default Bands
  