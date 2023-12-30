import { useSelector } from "react-redux"
import { selectLoggedIn, selectUser } from "../slices/userSlice"

const Home = () => {
  const logged = useSelector(selectLoggedIn)
  const user = useSelector(selectUser)
  console.log(user)

  return (
    <div>
      Home
      <div>{`${logged}`}</div>
    </div>
  )
}

export default Home