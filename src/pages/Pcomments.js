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
    //const dispatch = useDispatch()
    const { comments, onlyPost } = useHydrateComms(id)
    const user = useSelector(selectUser)
    console.log('user - from pcoms',user.itemId)
    //  const [comms, setComms] = useState('')
    //  const [justPost, setJustPost] = useState(false)

    //const { comments, onlyPost } = useHydrateComms(id)
   
    // useEffect(()=>{
    //     //const { comments, onlyPost } = useHydrateComms(id)
    //     setComms(comments)
    //     setJustPost(onlyPost)
    // },[id])

    //let canComment = ((justPost && (id === user.itemId)) ? false : true)
    let canComment = ((onlyPost && (id === user.itemId)) ? false : true)
    console.log('cancom: ',canComment)
    console.log('only postt: ', onlyPost)
    //let canComment = true
     let comms = comments
    
    









    return (
        <div>
                pcoms


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