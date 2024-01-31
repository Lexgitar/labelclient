import React from 'react'
import { useDispatch, } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {  deleteRole } from '../../slices/userSlice'

const DeleteRoleBtn = ({id, role}) => {
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const handleDelete = () => {
        dispatch(deleteRole({id, role}))
        navigate('/')
    }

    return (
        <button onClick={handleDelete} >
            Delete details
        </button>
    )
}

export default DeleteRoleBtn