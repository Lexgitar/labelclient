import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'
import { addUser, toggleLog, selectRoles, addUserInfo } from '../../slices/userSlice'

const LoginForm = () => {
    const roles = useSelector(selectRoles)
    const [email, setEmail] = useState('')
    //const [logged, setLogged] = useState('logged')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    let navigate = useNavigate()
    const dispatch = useDispatch()


    const handleSubmit = async (e) => {
        e.preventDefault()
        let body = { email, password }
        const response = await axios.post('/api/login', body)
        if (response.data) {
            const dataId = response.data._id
            const role = response.data.role
            console.log(response.data)
            dispatch(addUser(response.data))
            const foundProfile = (id, role) => {
                let profileRoles = (role === 'band' ? roles.bands : (role === 'labels' ? roles.labels : roles.fans))
                const userProfile = profileRoles.filter(function (profile) {
                    return profile.userId == id
                })[0]
                //console.log('Lf - handle', userProfile, profileRoles, roles)
                if (userProfile) {
                    return dispatch(addUserInfo(userProfile))
                }


            }

            foundProfile(dataId, role)


            dispatch(toggleLog(true))
            setEmail('')
            setPassword('')
            navigate('/account')
        } else {
            error = response.data
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
            /> <br />
            <label>Password:</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <br />

            <button >Log in</button>

            {error && <div className="error">{error}</div>}

        </form>
    )
}

export default LoginForm