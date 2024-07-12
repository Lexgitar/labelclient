import axios from "axios"
import { Tooltip } from "react-tooltip";
import LogoutIcon from '@mui/icons-material/Logout';
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
        <Link 
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Logout"
            data-tooltip-place="bottom"
            className="logoutButton" onClick={handleClick}>
                <Tooltip id="my-tooltip" />
            <LogoutIcon/>
           
            
        </Link>
    )
}

export default Logout