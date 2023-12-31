import { useSelector } from "react-redux"
import { selectInited , selectUserInfo} from "../slices/userSlice"

const UserInfo = () => {
    let inited = useSelector(selectInited)
    let userInfo = useSelector(selectUserInfo)
    console.log('UI', userInfo)

  return (
    <div>
        <p>name: {userInfo.name}</p>
        <p>location: {userInfo.location}</p>
    </div>
  )
}

export default UserInfo