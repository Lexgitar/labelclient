import axios from "axios"
import { Tooltip } from "react-tooltip";
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from "react-redux"
import { useNavigate, Link } from "react-router-dom"
import { toggleLog, userDelete, addUserInfo, toggleEdit, addError } from "../../slices/userSlice"

const Logout = () => {

    let navigate = useNavigate()
    const dispatch = useDispatch()
    //let baseUrl = 'https://labelfinder-xmhe.onrender.com'
    let baseUrl = 'https://www.bandnotts.com'
    const handleClick = async () => {
        const response = await axios.get(`${baseUrl}/api/logout`)
        //console.log(response.data)

        if (response.status === 200) {

            dispatch(userDelete())
            dispatch(toggleLog(false))
            dispatch(addUserInfo(''))
            dispatch(toggleEdit(false))
            navigate('/')
        } else {
            dispatch(addError(response.error))
            //console.log('logout error', response.error)
            //console.log('logout reponse', response)
        }

    }

    return (
        <Link
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Logout"
            data-tooltip-place="bottom"
            className="logoutButton" onClick={handleClick}>
            <Tooltip id="my-tooltip" />
            <LogoutIcon />


        </Link>
    )
}

export default Logout