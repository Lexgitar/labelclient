import React from 'react'
import { useDispatch, } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteUser } from '../../slices/userSlice'

const DeleteAccount = () => {

    const dispatch = useDispatch()
    let navigate = useNavigate()
    const handleDelete = () => {
        //dispatch(deleteRole())
        dispatch(deleteUser())
        navigate('/')
    }
    return (
        <div className='delAcc' >
            <button className='delete'  onClick={handleDelete} >
                Delete Account
            </button>
        </div>
    )
}

export default DeleteAccount