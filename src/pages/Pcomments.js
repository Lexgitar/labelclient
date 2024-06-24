import { useSelector, useDispatch } from "react-redux"
import { selectPcomms,
     selectPcommById,
      fetchComment,
        selectbyId
    } from "../slices/commentsSlice"
import { useEffect } from "react"


const Pcomments = () => {
    let id = '66770bcf65ac34fbc3354ae1'
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchComment({ id }))
    }, [])

    const profileComm = useSelector(selectPcomms)
    //const pcom = useSelector(state => selectPcommById(state, id))
    const com= useSelector(state=>selectbyId(state,id))
    console.log('kk', profileComm, com)
    return (
        <div>
            {/* {profileComm && profileComm.comments} */}

        </div>
    )
}

export default Pcomments