import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    //const [logged, setLogged] = useState('logged')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    let navigate = useNavigate()
    
  const user = {
    email: 'alex@google.com',
    password: 'lala23'
  }
    const handleSubmit = async (e) => {
      e.preventDefault()

        if(email === user.email && password === user.password){
            
            navigate('/account/user')
        }else{
             setError('invalid credentials')
             setEmail('')
             setPassword('')

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