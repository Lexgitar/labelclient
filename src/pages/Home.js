import {
  useSelector,

} from "react-redux"
import {
  selectLoggedIn, selectUser, selectRoles, selectUserEdit,

  selectApiMsg,
  selectStatus
} from "../slices/userSlice"
import HomeSkeletons from "../components/HomeSkeletons"




const Home = () => {
  let apiMsg = useSelector(selectApiMsg)
  let status = useSelector(selectStatus)
  
  let bands = useSelector(selectRoles).bands
  let labels = useSelector(selectRoles).labels
  let fans = useSelector(selectRoles).fans
  let artists = useSelector(selectRoles).artists




  return (
    <div>
       {(status === 'fulfilled' &&
       <>
      <div>bands{bands && bands.map((band) => (
        <p key={band._id} >
          {band._id}
        </p>
      ))}
      </div>
      <div>labels{labels && labels.map((label) => (
        <p key={label._id} >
          {label._id}
        </p>
       ))}
      </div>
      <div>fans{fans && fans.map((fan) => (
        <p key={fan._id} >
          {fan._id}
        </p>
        ))}
      </div>
      <div>artists{artists && artists.map((artist) => (
        <p key={artist._id} >
          {artist._id}
        </p>
      ))}
      </div>
      </>) || <HomeSkeletons/>
      }
    </div>
  )
}

export default Home