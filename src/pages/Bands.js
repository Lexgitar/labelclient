
import ProfileTile from "../components/ProfileTile"
import './pages.css'

import { useSelector } from "react-redux"
import { selectTerm, selectSearchRole, selectSearchKeys, selectFilteredBands } from "../slices/userSlice"
import { useLocation } from "react-router-dom"





const Bands = () => {

  let keys = useSelector(selectSearchKeys)
  let location = useLocation().pathname
  let bands = useSelector(selectFilteredBands)

  let term = useSelector(selectTerm)
  let searchPot = useSelector(selectSearchRole)

  if (term.length && location.includes(searchPot)) {
    bands = bands.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(term)))
    //console.log('pls', location)
  }


  return (
    <div className="bands cards">
      {/* <SearchBar /> <FilterTile /> */}
      {(bands.length && bands.map(band =>

        <ProfileTile key={band._id} profile={band} />

      )) || '>> no results <<'}


    </div>
  )
}

export default Bands
