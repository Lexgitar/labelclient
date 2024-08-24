import { Link, useLocation } from "react-router-dom"
import {
  useSelector,

} from "react-redux"
import {
  //electLoggedIn, 
  //selectUser, 
  selectRoles, 
  //selectUserEdit,

  //selectApiMsg,
  selectStatus
} from "../slices/userSlice"
import HomeSkeletons from "../components/HomeSkeletons"




const Home = () => {
  //let apiMsg = useSelector(selectApiMsg)
  let status = useSelector(selectStatus)
  //let location = useLocation().pathname
  
  let bands = useSelector(selectRoles).bands
  let labels = useSelector(selectRoles).labels
  //let fans = useSelector(selectRoles).fans
  let artists = useSelector(selectRoles).artists




  return (
    <div className="home">
       {(status === 'fulfilled' &&
       <>
      <div>BANDS{bands && bands.map((band) => (
        <Link key={band._id} to={`bands/${band._id}`} >
          {band.name}
        </Link>
      ))}
      </div>
      <div>LABELS{labels && labels.map((label) => (
        <Link key={label._id} to={`labels/${label._id}`} >
          {label.name}
        </Link>
       ))}
      </div>
      {/* <div>fans{fans && fans.map((fan) => (
        <p key={fan._id} >
          {fan.name}
        </p>
        ))}
      </div> */}
      <div>ARTISTS{artists && artists.map((artist) => (
        <Link key={artist._id} to={`artists/${artist._id}`} >
          {artist.name}
        </Link>
      ))}
      </div>
      </>) || <HomeSkeletons/>
      }
    </div>
  )
}

export default Home