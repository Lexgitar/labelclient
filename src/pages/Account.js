import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SignUpForm from '../components/forms/SignUpForm'

const profile = {
    name:'Alex',
    location:'Moon'
}

const Account = () => {
const [signedIn, setSignedIn] = useState(false)
const [signedUp, setSignedUp] = useState(false)
const onSign = () =>{
    signedIn? setSignedIn(false):setSignedIn(true)
}

if(signedIn){
    return (
        <div>
            <Link onClick={()=>onSign()}  >Log out</Link>
        </div>
    )
}
  return (
    <div>
        <Link to='signup' onClick={()=>onSign()} >Sign up</Link>
        <Link to='login' onClick={()=>onSign()} >Sign in</Link>
           
    </div>
  )
}

export default Account