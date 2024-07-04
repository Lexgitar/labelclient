import DeleteComment from "../components/functional/DeleteComment"

const Comments = ({profile, comms}) => {
    console.log('f coms cmp ' , comms)
  return (
    <div>
        {(comms && comms.map((comment) =>
            <div key={comment._id}>
              <p >
                {comment.body} 
              </p>
              <DeleteComment
                  id = {profile}
                  authorId = {comment.authorId} 
                  commentId = {comment._id}
                  />
            </div>
        ))  || '>> no comments <<' }
    </div>
  )
}

export default Comments

