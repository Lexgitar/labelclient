import React from 'react'
import { useDispatch, } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {  addUserInfo, deleteRole } from '../../slices/userSlice'

const DeleteRoleBtn = ({id, role}) => {
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const handleDelete = () => {
        dispatch(deleteRole({id, role})).then(value=>{
            if(value.payload.data === "User-role-details deleted"){
                dispatch(addUserInfo(''))
                
                navigate('/')
            }else{
                dispatch(addUserInfo(''))
                console.log('delete info invalid')
            }
        })
        
    }

    return (
        <button onClick={handleDelete} >
            Delete details
        </button>
    )
}

export default DeleteRoleBtn