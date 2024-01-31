import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { createDetails, editDetails, selectUserEdit, toggleEdit, selectError } from "../../slices/userSlice"
import { useDispatch, useSelector } from "react-redux"
import SelectGenre from "../functional/SelectGenre"



const UserForm = ({ user, userInfo }) => {
    let erur = useSelector(selectError)
    let edited = useSelector(selectUserEdit)
    let navigate = useNavigate()
    let fetchType = edited ? editDetails : createDetails
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [id, setId] = useState('')
    const tiTle = userInfo ? 'Edit Profile' : 'Create profile'
    useEffect(() => {
        if (userInfo) {
            setName(userInfo.name)
            setLocation(userInfo.location)
            setId(userInfo._id)
        }
    }, [userInfo])
    const handleSubmit = async (e) => {
        e.preventDefault()
        let body = { name, location }
        let role = user.role
        let fetchArg = edited ? { id, role, body } : { role, body }
        //console.log('UF', role)
        //
        dispatch(fetchType(fetchArg))
        // console.log(role, 'and', body)
        // console.log(fetchType)
        //
        dispatch(toggleEdit(true))
        setName('')
        setLocation('')
        //
        navigate('/account')
    }

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
        > {tiTle} <br />
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="name" value={name} required /> <br />
            <input type="text" onChange={(e) => setLocation(e.target.value)} placeholder="location" value={location} required /><br />
           <SelectGenre/>
            <button>Submit</button>
            {erur && <p>{erur}</p> }
           
        </form>
    )
}

export default UserForm