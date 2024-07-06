import {
  useSelector,
  //useDispatch 
} from "react-redux"
import {
  selectLoggedIn, selectUser, selectRoles, selectUserEdit,
  //selectError,
  selectApiMsg
} from "../slices/userSlice"
//import { useEffect } from "react"
import Errorent from "../components/functional/Errorent"



const Home = () => {
  let apiMsg = useSelector(selectApiMsg)
  //const error = useSelector(selectError)
  //console.log('home', error)
  let edit = useSelector(selectUserEdit)
  let bands = useSelector(selectRoles).bands
  let labels = useSelector(selectRoles).labels
  let fans = useSelector(selectRoles).fans
  let artists = useSelector(selectRoles).artists
  //let dispatch = useDispatch()

  const logged = useSelector(selectLoggedIn)
  const user = useSelector(selectUser)
  //console.log(user? user:'no user')
  console.log('fans', fans)

  return (
    <div>
      Home
      <br />
      {apiMsg && <p> - {apiMsg} - </p>}
      {/* <Errorent /> */}
      <div>edit:{`${edit}`} , logged: {`${logged}`}</div>
      {user && <p>{user.email}</p>}
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
    </div>
  )
}

export default Home