import { 
    useSelector, 
    //useDispatch 
    } from 'react-redux';
//import { selectbyId, } from '../slices/commentsSlice';
import { selectUser } from '../slices/userSlice';

import CommentForm from '../components/forms/CommentForm';
import Comments from "./Comments";



import useHydrateComms from "../components/functional/useHydrateComms";
import { useEffect, 
    useState ,
} from 'react';


const Pcomments = ({ id, bubble }) => {
    
    const { comments, onlyPost } = useHydrateComms(id)
    const user = useSelector(selectUser)
    
    console.log('user - from pcoms',user.itemId)
   
    let canComment = ((onlyPost && (id === user.itemId)) ? false : true)

    console.log('cancom: ',canComment)
    console.log('only postt: ', onlyPost)
   
     let comms = comments
    

    return (
        <div>
                pcoms


           
           
            {(bubble && canComment)  && <CommentForm id={id} onlyPost={onlyPost} />}
            {bubble && <Comments profile = {id} comms={comms} />}
        </div>
    )
}

export default Pcomments