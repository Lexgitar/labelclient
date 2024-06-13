import ProfileTile from "../components/ProfileTile"
import SearchBar from "../components/functional/SearchBar"
import './pages.css'

import { useSelector } from "react-redux"
import { selectRoles, selectTerm, selectSearchRole, selectSearchKeys } from "../slices/userSlice"
import { useLocation } from "react-router-dom"


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
      <SearchBar />
      {(artists && artists.map(artist =>

        <ProfileTile key={artist._id} profile={artist} />

      ))  || '>> no results <<'}


    </div>
  )
}

export default Artists