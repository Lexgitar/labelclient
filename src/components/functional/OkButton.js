
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addError, fetchRoles, selectError } from '../../slices/userSlice'

const OkButton = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  let errorr = useSelector(selectError)
  //console.log('eeroarea', errorr)
  const handleOk = () => {
    navigate('/')
    if (errorr === 'Request failed with status code 404') {
      dispatch(fetchRoles()).then(
        value => {
             if(!value.error && value.payload) {
                
                dispatch(addError(''))
                
            }
        }
    )
      
      
     
    } else {
      dispatch(addError(''))
    }


  }

  return (
    <button onClick={handleOk}>Ok</button>
  )
}

export default OkButton