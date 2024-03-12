import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {
    createDetails,
     editDetails,
      selectUserEdit,
    
    //selectError
} from "../../slices/userSlice"
import { useDispatch, useSelector } from "react-redux"
import Errorent from "../functional/Errorent"


const options = [
    { value: 'metal', label: 'Metal' },
    { value: 'pop', label: 'Pop' },
    { value: 'rap', label: 'Rap' }
]

const UserForm = ({ user, userInfo }) => {

    let edited = useSelector(selectUserEdit)
    let navigate = useNavigate()
    const dispatch = useDispatch()

    let fetchType = edited ? editDetails : createDetails

    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [genre, setGenre] = useState('')
    const [about, setAbout] = useState('')
    const [links, setLinks] = useState('')

    const [id, setId] = useState('')
    const tiTle = userInfo ? 'Edit Profile' : 'Create profile'

    useEffect(() => {
        if (userInfo) {
            setName(userInfo.name)
            setLocation(userInfo.location)
            setId(userInfo._id)
            setGenre(userInfo.genre)
            setAbout(userInfo.about)
            setLinks(userInfo.links)
        }
    }, [userInfo])

    const handleSubmit = async (e) => {
        e.preventDefault()
        let role = user.role
        let body = user.role === 'fan' ? { name, location, about, links } : { name, location, genre, about, links }

        let fetchArg = edited ? { id, role, body } : { role, body }

        dispatch(fetchType(fetchArg)).then(value => {
            if (value.payload.errors) {
                console.log('value paiload erors', value.payload)
            } else if (value.payload && !value.payload.errors) {
                console.log('value.payload', value.payload)
                setName('')
                setLocation('')
                setGenre('')
                setAbout('')
                setLinks('')
                navigate('/account')
            } else {
                console.log('ELSE')
            }
        })
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} >
            {tiTle} <br />
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" value={name} required /> <br />
            <input type="text" onChange={(e) => setLocation(e.target.value)} placeholder="Location" value={location} required /><br />
            <textarea type="text" onChange={(e) => setAbout(e.target.value)} placeholder="About" value={about} required /><br />
            <input type="text" onChange={(e) => setLinks(e.target.value)} placeholder="Link" value={links} required /><br />

            {(user.role !== 'fan' && user.role !== 'artist') &&
                <>
                    <label htmlFor="genre">Genre: </label><br />
                    <select name="" id="genre"
                        onChange={(e) => setGenre(e.target.value)}
                    >
                        {/* <option value="">--Select genre--</option> */}
                        {options.map(item => (
                            <option key={item.value} value={item.value}>{item.label}</option>
                        ))}
                    </select>
                </>
            }
            <br />

            <button>Submit</button>
            <Errorent />
            {genre && <p>{genre}</p>}
        </form>
    )
}

export default UserForm