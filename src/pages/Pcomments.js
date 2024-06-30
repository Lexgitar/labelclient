import { useSelector, useDispatch } from "react-redux"
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import {
    selectPcomms,
    fetchComment,
    selectbyId
} from "../slices/commentsSlice"
import { useEffect, useState } from "react"


const Pcomments = ({ id }) => {

     let pComms = useSelector(state=>selectbyId(state, id))
    const [bubble, setBubble] = useState(false)
    //const [pComm, setPcomm] = useState('')

    let ids = '66770bcf65ac34fbc3354ae1'
    const dispatch = useDispatch()

    const handleBubble = () => {
        
        console.log('kk', pComms)
        !bubble ? setBubble(true) : setBubble(false)

    }

    

     useEffect(() => {
        dispatch(fetchComment({id}))
     }, [])

    //uncomment Selectors

    // const profileComm = useSelector(selectPcomms)
    // const com = useSelector(state => selectbyId(state, id))
    


    return (
        <div>
            {/* {profileComm && profileComm.comments} */}

            <ChatBubbleOutlineIcon onClick={handleBubble} />
            <div>
                {bubble && 'comment ' + id }
            </div>
        </div>
    )
}

export default Pcomments