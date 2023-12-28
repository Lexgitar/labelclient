import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {

    let navigate = useNavigate()
    

    const handleSubmit = ()=>{
        
      navigate('/account/user')
    
    }
  return (
    <div onClick={handleSubmit} >LoginForm</div>
  )
}

export default LoginForm