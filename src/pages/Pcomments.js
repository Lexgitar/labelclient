import { useSelector, useDispatch } from 'react-redux';
import { selectbyId } from '../slices/commentsSlice';

import CommentForm from '../components/forms/CommentForm';
import Comments from "./Comments";


import { useState } from "react"
import useHydrateComms from "../components/functional/useHydrateComms";


const Pcomments = ({ id, bubble }) => {
    const dispatch = useDispatch()

    const { comments, onlyPost } = useHydrateComms(id)
    //use hook
    

    let komms = comments
    console.log('pcom', komms)
    const comms = comments









    return (
        <div>



            <div>
                {bubble && 'comment ' + id}
            </div>
            {/* {bubble && <Comments comments={comms}/>} */}
            {bubble  && <CommentForm id={id} onlyPost={onlyPost} />}
            {bubble && <Comments comms={comms} />}
        </div>
    )
}

export default Pcomments