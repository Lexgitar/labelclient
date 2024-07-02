import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPostComment, fetchPutComment } from "../../slices/commentsSlice"
import { selectLoggedIn } from "../../slices/userSlice"

const CommentForm = ({id, onlyPost}) => {
    let loggedIn = useSelector(selectLoggedIn)
    const dispatch = useDispatch()
    const [comment, setComment] = useState('')

    let fetchType = onlyPost? fetchPostComment : fetchPutComment
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(fetchPostComment({id, body:comment}))
    }

    
    if(loggedIn){
        return (
            <form onSubmit={(e) => handleSubmit(e)} action="" id='commentform'>
                <textarea 
                onChange={(e) => setComment(e.target.value)} 
                type="text" 
                placeholder="add comment..." 
                value={comment}
                />
                <button>Add</button>
            </form>
        )
    }
    
}

export default CommentForm