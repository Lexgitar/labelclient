import useCanDeleteComment from "../components/functional/useCanDeleteComment"
import DeleteComment from "../components/functional/DeleteComment"
import useGetComAuthor from "../components/functional/useGetComAuthor"
import {  formatDistanceToNow } from 'date-fns';

import { Link} from "react-router-dom"

const OneComment = ({ id, comment }) => {

  const { canDelete } = useCanDeleteComment(id, comment.authorId)
  const { author, linkRole } = useGetComAuthor(comment.authorId)
  let path = linkRole && comment.authorId ? `/${linkRole}s/${comment.authorId}` : ''
  console.log(author)

  if (comment) {
    return (
      <div className="commDiv" key={id} >
        <div className="cominfo" >
          <Link className="commauthor" to={path} ><h4>{author}</h4></Link>
          <p className="commDate">{formatDistanceToNow(new Date(comment.createdAt),{ addSuffix: true })}</p>
        </div>
        <p className="commBody"> {comment.body} </p>
       
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