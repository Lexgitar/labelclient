
// "proxy":"http://localhost:3000",
//import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

//import SignUpForm from "../components/forms/SignUpForm"
import ProfileTile from "../components/ProfileTile"
import FilterTile from "../components/functional/FilterTile"
import './pages.css'

import { useSelector } from "react-redux"
import { selectRoles } from "../slices/userSlice"




const Bands = () => {

  let bands = useSelector(selectRoles).bands


  return (
    <div className="bands">
      {bands && bands.map(band =>
        <Link key={band._id} to={`${band._id}`}>
          <ProfileTile
            key={band._id}
            profile={band}

          />
        </Link>
      )}


    </div>
  )
}

export default Bands
