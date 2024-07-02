import { useSelector, useDispatch } from 'react-redux';
import { selectbyId } from '../slices/commentsSlice';

import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Comments from "./Comments";


import {  useState } from "react"
import useHydrateComms from "../components/functional/useHydrateComms";


const Pcomments = ({ id }) => {
    const dispatch = useDispatch()
    const [bubble, setBubble] = useState(false)
    const {comments} = useHydrateComms(id)
    //use hook
    //const [comms, setComms] = useState('')
    
    //let profileComment = useSelector(state => selectbyId(state, id))
   
    let komms = comments
    console.log('pcom',komms)
    const comms = comments




    const handleBubble = () => {
      
        !bubble ? setBubble(true) : setBubble(false)
 
    }




    return (
        <div>
            

            <ChatBubbleOutlineIcon onClick={handleBubble} />
            <div>
                {bubble && 'comment ' + id}
            </div>
            {/* {bubble && <Comments comments={comms}/>} */}
            {bubble && <Comments comms={comms}/>}
        </div>
    )
}

export default Pcomments