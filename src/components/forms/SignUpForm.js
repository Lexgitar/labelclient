//import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import { useSelector } from "react-redux"

import {
  //selectError,
  //selectUser 
} from "../../slices/userSlice"

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import {
 
  useDispatch
} from "react-redux"
import {
  
  userSignup
} from "../../slices/userSlice"



const SignUpForm = () => {

  

  let navigate = useNavigate()
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState('fan')

  const handleVisibility = () => {
    let visible = showPassword ? false : true
    setShowPassword(visible)
  }

  const roleChange = (e) => {
    setRole(e.target.value)
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    
    let userBody = { email, password, role }
    //console.log(Object.keys(userBody).length)

    //console.log('userbody', userBody)

    dispatch(userSignup({ userBody })).then(value => {
      if (value.payload.errors) {
        //console.log('value paiload erors', value.payload)
      } else if (value.payload && !value.payload.errors) {
        //console.log('value.payload', value.payload)
        setEmail('')
        setPassword('')
        navigate('/account')
      } else {
        console.log('ELSE')
      }
    })


  }

  return (
    <form action=""
      className="signup"
      onSubmit={handleSubmit}
    >
      <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="" placeholder="email" value={email} required />
      <input onChange={(e) => setPassword(e.target.value)} type={
        showPassword ? "text" : "password"
      } name="password" id="" placeholder="password" value={password}
        required />
      <span onClick={() => handleVisibility()} >
        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
      </span>
      <br />
      <input
        checked={role === 'label'}
        onChange={(e) => roleChange(e)}
        type="radio" id="label" name="role" value="label" />
      <label htmlFor="label">Label</label><br />
      <input checked={role === 'band'} onChange={(e) => roleChange(e)} type="radio" id="band" name="role" value="band" />
      <label htmlFor="band">Band</label><br />
      <input checked={role === 'artist'} onChange={(e) => roleChange(e)} type="radio" id="artist" name="role" value="artist" />
      <label htmlFor="artist">Artist</label><br />
      <input checked={role === 'fan'} onChange={(e) => roleChange(e)} type="radio" id="fan" name="role" value="fan" />
      <label htmlFor="fan">Fan</label><br />
      
      <button type="submit">Submit</button>

    </form>
  )
}

export default SignUpForm