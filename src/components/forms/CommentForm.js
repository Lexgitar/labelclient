import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const CommentForm = ({id}) => {
    const dispatch = useDispatch()
    const [comment, setComment] = useState('')

    
    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    

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

export default CommentForm