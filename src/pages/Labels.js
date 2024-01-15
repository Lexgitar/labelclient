

//import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

//import SignUpForm from "../components/forms/SignUpForm"
import ProfileTile from "../components/ProfileTile"
import './pages.css'

import { useSelector } from "react-redux"

import { selectRoles } from "../slices/userSlice"





const Labels = () => {

  let labels = useSelector(selectRoles).labels

  return (
    <div className="labels">
      {labels && labels.map(label =>
        
          <ProfileTile key={label._id} profile={label}/>
        
      )}
    </div>
  )
}

export default Labels