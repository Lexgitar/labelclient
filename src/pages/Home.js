import { useSelector, useDispatch } from "react-redux"
import { selectLoggedIn, selectUser, selectRoles } from "../slices/userSlice"
import { useEffect } from "react"

import { fetchRoles } from "../slices/userSlice"

const Home = () => {
  let bands = useSelector(selectRoles).bands
  let dispatch = useDispatch()
  let role = 'band'
  useEffect(()=>{
    dispatch(fetchRoles(role))
  },[])
  const logged = useSelector(selectLoggedIn)
  const user = useSelector(selectUser)
  //console.log(user? user:'no user')

  return (
    <div>
      Home
      <div>{`${logged}`}</div>
      <div>{bands && bands.map((label)=>(
        <p>{label._id}</p>
      ))}</div>
    </div>
  )
}

export default Home