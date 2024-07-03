import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'
import { addUser, toggleLog, selectRoles, addUserInfo, addError } from '../../slices/userSlice'

import Errorent from '../functional/Errorent'

const LoginForm = () => {
    const roles = useSelector(selectRoles)

    const [email, setEmail] = useState('')
    //const [logged, setLogged] = useState('logged')
    const [password, setPassword] = useState('')

    let navigate = useNavigate()
    const dispatch = useDispatch()


    const handleSubmit = async (e) => {
        e.preventDefault()
        let body = { email, password }
        try {
            const response = await axios.post('/api/login', body)

            if (response.data && response.data.status !== 400) {

                const dataId = response.data._id
                const role = response.data.role

                console.log('from login data',response.data)
                dispatch(addUser(response.data))

                const foundProfile = (id, role) => {
                    const profileRoles = (role === 'band' ? roles.bands : (role === 'label' ? roles.labels : (role === 'artist' ? roles.artists : roles.fans)))

                    const userProfile = profileRoles.filter((profile) =>
                        profile.userId === id)[0]
                    console.log('Lf - handle', userProfile, profileRoles, roles)
                    if (userProfile) {
                        console.log('userprofiel', userProfile)
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
            <label>Email address:</label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
            /> <br />
            <label>Password:</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
            /> <br />
            <button >Log in</button>

            <Errorent />

        </form>
    )
}

export default LoginForm