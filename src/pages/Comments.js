
import OneComment from "./OneComment"
const Comments = ({ profile, comms }) => {

  console.log('f coms cmp ', comms)
  return (
    <div>
      {(comms && comms.map((comment) =>
        <div key={comment._id}>
          <OneComment
            id={profile}
            comment={comment}

          />

        </div>
      )) || '>> no comments <<'}
    </div>
  )
}

export default Comments

