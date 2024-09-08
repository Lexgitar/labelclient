import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPostComment, fetchPutComment } from "../../slices/commentsSlice"
import { selectLoggedIn } from "../../slices/userSlice"



const CommentForm = ({id, onlyPost}) => {
    let loggedIn = useSelector(selectLoggedIn)
    const dispatch = useDispatch()
    const [body, setBody] = useState('')

    let fetchType = onlyPost? fetchPostComment : fetchPutComment
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('hsb BEFORE', id, body)
        dispatch(fetchType({id, body}))
        console.log('hsb', id, body)
        setBody('')
    }

    
    if(loggedIn){
        return (
            <form onSubmit={(e) => handleSubmit(e)}  id='commentform'>
                <textarea 
                rows="3" cols="40"
                onChange={(e) => setBody(e.target.value)} 
                type="text" 
                placeholder="add comment..." 
                value={body}
                />
                <button>Add</button>
            </form>
        )
    }
    
}

export default CommentForm