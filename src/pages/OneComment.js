import useCanDeleteComment from "../components/functional/useCanDeleteComment"
import DeleteComment from "../components/functional/DeleteComment"
import useGetComAuthor from "../components/functional/useGetComAuthor"
import { Link} from "react-router-dom"
const OneComment = ({ id, comment }) => {

  const { canDelete } = useCanDeleteComment(id, comment.authorId)
  const { author, linkRole } = useGetComAuthor(comment.authorId)
  let path = linkRole && comment.authorId ? `/${linkRole}s/${comment.authorId}` : ''
  console.log(author)

  if (comment) {
    return (
      <div>
        <p>body: {comment.body} </p>
        <p>id: {comment.authorId}</p>
        <Link to={path} >author: {author}</Link>
        {/* <NavLink to={`/${linkRole}s/${comment.authorId}`} >author: {author}</NavLink> */}
        {canDelete && <DeleteComment
          id={id}
          authorId={comment.authorId}
          commentId={comment._id}
        />}
      </div>
    )
  }

}

export default OneComment