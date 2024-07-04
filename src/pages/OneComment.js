import useCanDeleteComment from "../components/functional/useCanDeleteComment"
import DeleteComment from "../components/functional/DeleteComment"

const OneComment = ({id, comment}) => {

    const {canDelete} = useCanDeleteComment(id, comment.authorId)
    
  return (
    <div>
        <p>{comment.body}{ comment.authorId}</p>
       { canDelete && <DeleteComment
                  id = {id}
                  authorId = {comment.authorId} 
                  commentId = {comment._id}
              />}
    </div>
  )
}

export default OneComment