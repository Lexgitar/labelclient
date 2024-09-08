import {
    useSelector,
    //useDispatch 
} from 'react-redux';
//import { selectbyId, } from '../slices/commentsSlice';
import { selectLoggedIn, selectUser } from '../slices/userSlice';

import CommentForm from '../components/forms/CommentForm';
import Comments from "./Comments";
import CommSkeletons from '../components/CommSkeletons';



import useHydrateComms from "../components/functional/useHydrateComms";
// import { useEffect, 
//     useState ,
// } from 'react';
import { selectComStatus } from '../slices/commentsSlice';


const Pcomments = ({ id, bubble }) => {

    const { comments, onlyPost } = useHydrateComms(id)
    const user = useSelector(selectUser)
    const commentIn = useSelector(selectComStatus)
    const loggedIn = useSelector(selectLoggedIn)
    //const commTrue = commentIn === 'fulfilled' || commentIn === 'pending' ? true : false
    const commTrue = commentIn === 'fulfilled' ? true : false


    //let canComment = ((onlyPost && (id === user.itemId)) ? false : true)
    let canComment = (!loggedIn ? false : ((onlyPost && (id === user.itemId)) ? false : true))

    console.log('cancom: ', canComment)
    console.log('only postt: ', onlyPost)

    let comms = comments


    return (
        <div className='pcomments'>
            Comments




            {(bubble && canComment) && <CommentForm id={id} onlyPost={onlyPost} />}
            {((bubble && !commTrue) && <CommSkeletons />) || (bubble && <Comments key={id} profile={id} comms={comms} />)}
        </div>
    )
}

export default Pcomments