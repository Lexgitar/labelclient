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
  
  let bands = useSelector(selectRoles).bands
  let labels = useSelector(selectRoles).labels
  let fans = useSelector(selectRoles).fans
  let artists = useSelector(selectRoles).artists




  return (
    <div>
       {(status === 'fulfilled' &&
       <>
      <div>BANDS:{bands && bands.map((band) => (
        <p key={band._id} >
          {band.name}
        </p>
      ))}
      </div>
      <div>LABELS:{labels && labels.map((label) => (
        <p key={label._id} >
          {label.name}
        </p>
       ))}
      </div>
      <div>fans{fans && fans.map((fan) => (
        <p key={fan._id} >
          {fan.name}
        </p>
        ))}
      </div>
      <div>ARTISTS:{artists && artists.map((artist) => (
        <p key={artist._id} >
          {artist.name}
        </p>
      ))}
      </div>
      </>) || <HomeSkeletons/>
      }
    </div>
  )
}

export default Home