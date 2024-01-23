import { useState } from "react"
import { useNavigate } from "react-router-dom"

import {
  //useSelector,
  useDispatch
} from "react-redux"
import {
  //addUser,
  //toggleLog,
  userSignup
} from "../../slices/userSlice"


const SignUpForm = () => {
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

    // const response = await fetch('/api/signup', {
    //     method: 'POST',
    //     body: JSON.stringify(user),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   })   
    // const json = await response.json()

    // if(response.ok){
    //     console.log(json)
    //     setEmail('')
    //     setPassword('')
    //     dispatch(userSignup(userBody))

    //     navigate('/account')
    // }

    console.log('userbody', userBody)
    setEmail('')
    setPassword('')
    dispatch(userSignup({ userBody }))

    navigate('/account')


  }

  return (
    <form action=""
      className="signup"
      onSubmit={handleSubmit}
    >
      <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="" placeholder="email" value={email} required />
      <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="" placeholder="password" value={password} required/><br />
      <input
        checked={role === 'label'}
        onChange={(e) => roleChange(e)}
        type="radio" id="label" name="role" value="label" />
      <label htmlFor="label">Label</label><br />
      <input checked={role === 'band'} onChange={(e) => roleChange(e)} type="radio" id="band" name="role" value="band" />
      <label htmlFor="band">Band</label><br />
      <input checked={role === 'fan'} onChange={(e) => roleChange(e)} type="radio" id="fan" name="role" value="fan" />
      <label htmlFor="fan">Fan</label><br />
      {/* <p>{role}</p>
            <p>{email}</p>
            <p>{password}</p> */}
      <button type="submit">Submit</button>

    </form>
  )
}

export default SignUpForm