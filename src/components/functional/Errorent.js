import React from 'react'
import { useSelector } from 'react-redux'
import { selectError } from '../../slices/userSlice'
import OkButton from './OkButton'

const Errorent = () => {

    let theError = useSelector(selectError)

    if(theError){
        return (
            <div>
                
                {theError && theError}
                <br />
                <OkButton/>
            </div>
          )
    }
  
}

export default Errorent