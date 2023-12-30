import { useSelector } from "react-redux"
import { selectLoggedIn, selectUser } from "../slices/userSlice"

const Home = () => {
  const logged = useSelector(selectLoggedIn)
  const user = useSelector(selectUser)
  //console.log(user? user:'no user')

  return (
    <div>
      Home
      <div>{`${logged}`}</div>
    </div>
  )
}

export default Home