
import OneComment from "./OneComment"
const Comments = ({ profile, comms }) => {

 console.log('onecom comms:', comms,)

 if(comms !== 'no comments yet'){
  return (
    <div>
      {(comms  && comms.map((comment) =>
        <div key={comment._id}>
          <OneComment
            id={profile}
            comment={comment}

          />

        </div>
      )) || '>> no comments <<'}
    </div>
  )
 }else {
  return <div>{comms}</div>
 }
 
}

export default Comments

