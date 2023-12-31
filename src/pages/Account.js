import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectLoggedIn, selectUser, selectInited, initedToggle } from '../slices/userSlice'
import UserDetails from '../components/functional/UserDetails'
import { useDispatch } from 'react-redux'


const Account = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    let logged = useSelector(selectLoggedIn)

    if (logged ) {
        user.inited ? dispatch(initedToggle(true)):dispatch(initedToggle(false))
        return (
            <div>
                <UserDetails />
            </div>
        )
    }

    return (
        <div>
            <Link to='signup'  >Sign up</Link>
            <Link to='login' >Sign in</Link>

        </div>
    )
}

export default Account