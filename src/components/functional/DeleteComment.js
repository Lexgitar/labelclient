
import { useDispatch,
     //useSelector
     }   from 'react-redux';

import { fetchDeleteComment } from '../../slices/commentsSlice';

const DeleteComment = ({ id, authorId, commentId }) => {
    const dispatch = useDispatch()
    
    
    const handleDelete = () => {
        dispatch(fetchDeleteComment({ id, authorId, commentId }))
    }
    
        return (
        
            <button onClick={handleDelete}  >
                Delete
            </button> 
        
    )
    
}

export default DeleteComment