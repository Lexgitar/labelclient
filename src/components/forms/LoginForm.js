import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [logged, setLogged] = useState(false)
    const [password, setPassword] = useState('')
    let navigate = useNavigate()
    
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      if (logged){
      navigate('/account/user')
      }
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
  
        {/* <button disabled={isLoading}>Log in</button> */}
        <button onClick = {()=>setLogged(true)} >Log in</button>
        {/* {error && <div className="error">{error}</div>} */}
      </form>
    )
  }

export default LoginForm