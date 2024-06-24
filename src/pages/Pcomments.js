import { useSelector, useDispatch } from "react-redux"
import { selectPcommById, fetchComment } from "../slices/commentsSlice"
import { useEffect } from "react"


const Pcomments = () => {
    let id = '66770bcf65ac34fbc3354ae1'
    const dispatch = useDispatch()
    useEffect(()=>{
dispatch(fetchComment({id}))
    },[])

    //const profileComm = useSelector(state =>selectPcommById(state, id))

  return (
    <div>
        {/* {profileComm && profileComm.comments} */}

    </div>
  )
}

export default Pcomments