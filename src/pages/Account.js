import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SignUpForm from '../components/forms/SignUpForm'
import { useSelector } from 'react-redux'
import { selectLoggedIn } from '../slices/userSlice'
import UserDetails from '../components/functional/UserDetails'


const Account = () => {

    let logged = useSelector(selectLoggedIn)

if(logged){
    return(
        <div>
            <UserDetails/>
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