import useCanDeleteComment from "../components/functional/useCanDeleteComment"
import DeleteComment from "../components/functional/DeleteComment"
import useGetComAuthor from "../components/functional/useGetComAuthor"
const OneComment = ({id, comment}) => {

    const {canDelete} = useCanDeleteComment(id, comment.authorId)
    const {author, mane} = useGetComAuthor(comment.authorId)
console.log(author, mane)
  return (
    <div>
        <p>{comment.body}{ comment.authorId} </p>
        <p>author: {mane}</p>
       { canDelete && <DeleteComment
                  id = {id}
                  authorId = {comment.authorId} 
                  commentId = {comment._id}
              />}
    </div>
  )
}

export default OneComment