import { useSelector, useDispatch } from 'react-redux';
import { selectbyId, } from '../slices/commentsSlice';
import { selectUser } from '../slices/userSlice';

import CommentForm from '../components/forms/CommentForm';
import Comments from "./Comments";


import { useState } from "react"
import useHydrateComms from "../components/functional/useHydrateComms";


const Pcomments = ({ id, bubble }) => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    console.log('user - from pcoms',user.itemId)

    const { comments, onlyPost } = useHydrateComms(id)
    //use hook
    let onlyPostCopy = true
    let canComment = ((onlyPost && (id === user.itemId)) ? false : true)
    console.log('cancom: ',canComment)
    console.log('only postt: ', onlyPost)
    //let canComment = true
    let komms = comments
    console.log('pcom', komms)
    const comms = comments









    return (
        <div>



            <div>
                {bubble && 'comment ' + id}
            </div>
            {/* {bubble && <Comments comments={comms}/>} */}
            {(bubble && canComment)  && <CommentForm id={id} onlyPost={onlyPost} />}
            {bubble && <Comments profile = {id} comms={comms} />}
        </div>
    )
}

export default Pcomments