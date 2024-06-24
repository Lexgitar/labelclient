import ProfileTile from "../components/ProfileTile"
import SearchBar from "../components/functional/SearchBar"
import './pages.css'
import FilterTile from "../components/functional/FilterTile"
import { useSelector } from "react-redux"
import { selectRoles, selectTerm, selectSearchRole, selectSearchKeys } from "../slices/userSlice"
import { useLocation } from "react-router-dom"

import Pcomments from "./Pcomments"

const Artists = () => {
  let keys = useSelector(selectSearchKeys)
  let artists = useSelector(selectRoles).artists
  let location = useLocation().pathname
  let term = useSelector(selectTerm)
  let searchPot = useSelector(selectSearchRole)
  if(term.length && location.includes(searchPot)){
    artists = artists.filter((item)=>
       //item.name.toLowerCase().includes(term))
       keys.some((key)=>item[key].toLowerCase().includes(term)))
    console.log('pls art', location)
  }
  return (
    <div className="artists">
      <SearchBar /> <FilterTile/>
      <Pcomments/>
      {(artists && artists.map(artist =>

        <ProfileTile key={artist._id} profile={artist} />

      ))  || '>> no results <<'}


    </div>
  )
}

export default Artists