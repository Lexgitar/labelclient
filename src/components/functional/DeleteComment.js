import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeleteComment } from '../../slices/commentsSlice';

const DeleteComment = ({ id, authorId }) => {
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(fetchDeleteComment({ id, authorId }))
    }
    return (
        <div>
            <DeleteIcon onClick={handleDelete} />
        </div>
    )
}

export default DeleteComment