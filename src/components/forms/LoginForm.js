import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import axios from 'axios'

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { useDispatch, useSelector } from 'react-redux'
import { addUser, toggleLog, selectRoles, addUserInfo, addError } from '../../slices/userSlice'

//import Errorent from '../functional/Errorent'

const LoginForm = () => {
    const roles = useSelector(selectRoles)
   // let baseUrl = 'https://labelfinder-xmhe.onrender.com'
    let baseUrl = 'https://www.bandnotts.com'
    const [email, setEmail] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('')

    let navigate = useNavigate()
    const dispatch = useDispatch()

    const handleVisibility = () => {
        let visible = showPassword ? false : true
        setShowPassword(visible)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let body = { email, password }
        try {
            const response = await axios.post(`${baseUrl}/api/login`, body, {
                withCredentials: true
                
            })

            if (response.data && response.data.status !== 400) {

                const dataId = response.data._id
                const role = response.data.role

                console.log('from login data', response.data)
                dispatch(addUser(response.data))

                const foundProfile = (id, role) => {
                    const profileRoles = (role === 'band' ? roles.bands : (role === 'label' ? roles.labels : (role === 'artist' ? roles.artists : roles.fans)))

                    const userProfile = profileRoles.filter((profile) =>
                        profile.userId === id)[0]

                    if (userProfile) {

                        return dispatch(addUserInfo(userProfile))
                    }


                }

                foundProfile(dataId, role)


                dispatch(toggleLog(true))
                dispatch(addError(''))
                setEmail('')
                setPassword('')
                navigate('/account')
            }

        } catch (error) {
            dispatch(addError(error.response.data.errors))

        }



        // navigate('/account/user')

    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <label>Email address: </label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
            /> <br />
            <label>Password: </label>
            <input
                aria-label='password'
                type={
                    showPassword ? "text" : "password"
                }
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required


            />
            <span onClick={() => handleVisibility()} >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </span>
            <br />
            <button >Log in</button>

            {/* <Errorent /> */}

        </form>
    )
}

export default LoginForm