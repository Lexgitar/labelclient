import { useSelector, useDispatch } from "react-redux"
import { selectLoggedIn, selectUser, selectRoles } from "../slices/userSlice"
import { useEffect } from "react"



const Home = () => {
  let bands = useSelector(selectRoles).bands
  let labels = useSelector(selectRoles).labels
  let fans = useSelector(selectRoles).fans
  let dispatch = useDispatch()

  const logged = useSelector(selectLoggedIn)
  const user = useSelector(selectUser)
  //console.log(user? user:'no user')

  return (
    <div>
      Home
      <div>logged: {`${logged}`}</div>
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
    </div>
  )
}

export default Home