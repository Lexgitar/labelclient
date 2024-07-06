

//import { useEffect, useState } from "react"
//import { Link } from "react-router-dom"

//import SignUpForm from "../components/forms/SignUpForm"
import ProfileTile from "../components/ProfileTile"
//import SearchBar from "../components/functional/SearchBar"
import './pages.css'
//import FilterTile from "../components/functional/FilterTile"

import { useSelector } from "react-redux"
import { selectTerm , selectSearchRole,selectSearchKeys, selectFilteredLabels} from "../slices/userSlice"
import { useLocation } from "react-router-dom"





const Labels = () => {
  let keys = useSelector(selectSearchKeys)
  let location = useLocation().pathname
  let labels = useSelector(selectFilteredLabels)
  let term = useSelector(selectTerm)
  let searchPot = useSelector(selectSearchRole)
  if(term.length && location.includes(searchPot)){
    labels = labels.filter((item)=>
      keys.some((key)=>item[key].toLowerCase().includes(term)))
    console.log('pls', location)
  }


  return (
    <div className="labels">
      {/* <SearchBar/> <FilterTile/> */}
      {(labels.length && labels.map(label =>

        <ProfileTile key={label._id} profile={label} />
       
      )) || '>> no results <<'}

        
    </div>
  )
}

export default Labels