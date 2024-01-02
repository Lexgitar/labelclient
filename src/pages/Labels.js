

//import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

//import SignUpForm from "../components/forms/SignUpForm"
import ProfileTile from "../components/ProfileTile"
import './pages.css'

import { useSelector } from "react-redux"
import { selectAllLabels } from "../slices/labelsSlice"
import { selectRoles } from "../slices/userSlice"





const Labels = () => {

  let labels = useSelector(selectRoles).labels

  return (
    <div className="labels">
      {labels && labels.map(label =>
        <Link key={label._id} to={`${label._id}`}>

          <ProfileTile
            key={label._id}
            profile={label}
          />
        </Link>
      )}
    </div>
  )
}

export default Labels