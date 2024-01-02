import axios from "axios"

import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toggleLog, userDelete, addUserInfo } from "../../slices/userSlice"

const Logout = () => {

    let navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = async () => {
        const response = await axios.get('/api/logout')
        console.log(response.data)
        dispatch(userDelete())
        dispatch(toggleLog(false))
        dispatch(addUserInfo(''))
        navigate('/')
    }

    return (
        <div className="logbutton" onClick={handleClick}>Logout</div>
    )
}

export default Logout