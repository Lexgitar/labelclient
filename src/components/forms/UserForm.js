import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { createDetails, editDetails, selectUserEdit, toggleEdit, selectError } from "../../slices/userSlice"
import { useDispatch, useSelector } from "react-redux"


const UserForm = ({ user, userInfo }) => {
    let erur = useSelector(selectError)
    let edit = useSelector(selectUserEdit)
    let navigate = useNavigate()
    let fetchType = edit ? editDetails : createDetails
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
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault()
        let body = { name, location }
        let role = user.role
        let fetchArg = edit ? { id, role, body } : { role, body }
        console.log('UF', role)
        //
        dispatch(fetchType(fetchArg))
        console.log(role, 'and', body)
        console.log(fetchType)
        //
        dispatch(toggleEdit(false))
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
            <button>Submit</button>
            {erur && <p>{erur}</p> }
        </form>
    )
}

export default UserForm