import ProfileTile from "../components/ProfileTile"
import SearchBar from "../components/functional/SearchBar"
import './pages.css'

import { useSelector } from "react-redux"
import { selectRoles } from "../slices/userSlice"


const Artists = () => {

    let artists = useSelector(selectRoles).artists

  return (
    <div className="artists">
      <SearchBar/>
      {artists && artists.map(artist =>

        <ProfileTile key={artist._id} profile={artist} />

      )}


    </div>
  )
}

export default Artists