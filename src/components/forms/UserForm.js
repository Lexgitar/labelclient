import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createDetails } from "../../slices/userSlice"
import { useDispatch } from "react-redux"


const UserForm = ({ user }) => {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        let body = { name, location }
        let role = user.role
        console.log('UF', role)
        //
        dispatch(createDetails({ role, body }))
        //
        setName('')
        setLocation('')
        //
        navigate('/account')
    }

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
        > Create profile <br />
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="name" value={name} /> <br />
            <input type="text" onChange={(e) => setLocation(e.target.value)} placeholder="location" value={location} /><br />
            <button>Submit</button>
        </form>
    )
}

export default UserForm