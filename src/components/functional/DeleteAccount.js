import React from 'react'
import { useDispatch,  } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteRole, deleteUser } from '../../slices/userSlice'

const DeleteAccount = () => {

    const dispatch = useDispatch()
    let navigate = useNavigate()
    const handleDelete = () => {
        //dispatch(deleteRole())
        dispatch(deleteUser())
        navigate('/')
    }
    return (
        <button onClick={handleDelete} >
            Delete Account
        </button>
    )
}

export default DeleteAccount