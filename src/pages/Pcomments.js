import { useSelector, useDispatch } from "react-redux"
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import {
    
    fetchComment,
    selectbyId
} from "../slices/commentsSlice"

import { useEffect, useState } from "react"


const Pcomments = ({ id }) => {

    //use hook

    let profileComment = useSelector(state => selectbyId(state, id))
    const [bubble, setBubble] = useState(false)
    

    let ids = '66770bcf65ac34fbc3354ae1'
    const dispatch = useDispatch()

    const handleBubble = () => {

        console.log('kk', profileComment)
        !bubble ? setBubble(true) : setBubble(false)

    }



    useEffect(() => {
        dispatch(fetchComment({ id }))
    }, [])

    



    return (
        <div>
            

            <ChatBubbleOutlineIcon onClick={handleBubble} />
            <div>
                {bubble && 'comment ' + id}
            </div>
        </div>
    )
}

export default Pcomments