import axios from "axios"

import { useDispatch } from "react-redux"
import { useNavigate, Link } from "react-router-dom"
import { toggleLog, userDelete, addUserInfo, toggleEdit } from "../../slices/userSlice"

const Logout = () => {

    let navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = async () => {
        const response = await axios.get('/api/logout')
        console.log(response.data)
        
        if (response.statusText === 'OK') {
           
            dispatch(userDelete())
            dispatch(toggleLog(false))
            dispatch(addUserInfo(''))
            dispatch(toggleEdit(false))
            navigate('/')
        }else{
            console.log('logout error')
        }

    }

    return (
        <Link className="logbutton" onClick={handleClick}>Logout</Link>
    )
}

export default Logout