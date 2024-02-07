import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { createDetails, editDetails, selectUserEdit, toggleEdit, selectError } from "../../slices/userSlice"
import { useDispatch, useSelector } from "react-redux"


const options = [
    { value: 'metal', label: 'Metal' },
    { value: 'pop', label: 'Pop' },
    { value: 'rap', label: 'Rap' }
]

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
        dispatch(fetchType(fetchArg)).then(value => {
            if (value.payload.errors) {
                console.log('value paiload erors', value.payload)
            } else if (value.payload && !value.payload.errors) {
                console.log('value.payload', value.payload)
                setName('')
                setLocation('')
                navigate('/account')
            } else {
                console.log('ELSE')
            }
        })
    }

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
        > {tiTle} <br />
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="name" value={name} required /> <br />
            <input type="text" onChange={(e) => setLocation(e.target.value)} placeholder="location" value={location} required /><br />
            <label htmlFor="genre">Genre: </label><br />
            <select name="" id="genre">
                {/* <option value="">--Select genre--</option> */}
                {options.map(item => (
                    <option key={item.value} value={item.value}>{item.label}</option>
                ))}
            </select>
            <br />

            <button>Submit</button>
            {erur && <p>{erur}</p>}

        </form>
    )
}

export default UserForm