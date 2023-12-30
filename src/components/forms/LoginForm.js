import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import axios from 'axios'

import { useDispatch } from 'react-redux'
import { addUser, toggleLog } from '../../slices/userSlice'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    //const [logged, setLogged] = useState('logged')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    let navigate = useNavigate()
    const dispatch = useDispatch()
    
  
    const handleSubmit = async (e) => {
      e.preventDefault()
        let body = {email, password}
        const response = await axios.post('/api/login', body)
      if(response.data){
        console.log(response.data.user)
        dispatch(addUser(response.data.user))
        dispatch(toggleLog(true))
        navigate('/account')
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