

const Comments = ({comms}) => {
    console.log('f coms cmp ' , comms)
  return (
    <div>
        {(comms && comms.map((comment) =>
            <p key={comment._id}>{comment.body}</p>
        ))  || '>> no comments <<' }
    </div>
  )
}

export default Comments

