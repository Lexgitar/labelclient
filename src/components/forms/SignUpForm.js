//import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import { useSelector } from "react-redux"

import {
  //selectError,
  //selectUser 
} from "../../slices/userSlice"

import {
  //useSelector,
  useDispatch
} from "react-redux"
import {
  //addUser,
  //toggleLog,
  userSignup
} from "../../slices/userSlice"
//import Errorent from "../functional/Errorent"


const SignUpForm = () => {

  // let user = useSelector(selectUser)
  //let erur = useSelector(selectError)

  let navigate = useNavigate()
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('fan')

  const roleChange = (e) => {

    setRole(e.target.value)

  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    // navigate('/account/user')
    let userBody = { email, password, role }
    console.log(Object.keys(userBody).length)

    console.log('userbody', userBody)

    dispatch(userSignup({ userBody })).then(value => {
      if (value.payload.errors) {
        console.log('value paiload erors', value.payload)
      } else if (value.payload && !value.payload.errors) {
        console.log('value.payload', value.payload)
        setEmail('')
        setPassword('')
        navigate('/account')
      } else {
        console.log('ELSE')
      }
    })



    // user ? navigate('/account') : navigate('')


  }

  return (
    <form action=""
      className="signup"
      onSubmit={handleSubmit}
    >
      <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="" placeholder="email" value={email} required />
      <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="" placeholder="password" value={password} required /><br />
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
      {/* <p>{role}</p>
            <p>{email}</p>
            <p>{password}</p> */}
      <button type="submit">Submit</button>

      {/* <Errorent /> */}

    </form>
  )
}

export default SignUpForm