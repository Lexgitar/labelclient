import React from 'react'

import { useDispatch } from 'react-redux'
import { addError } from '../../slices/userSlice'

const OkButton = () => {

    const dispatch = useDispatch()

    const handleOk = ()=>{
        dispatch(addError(''))
    }

  return (
    <button onClick={handleOk}>Ok</button>
  )
}

export default OkButton