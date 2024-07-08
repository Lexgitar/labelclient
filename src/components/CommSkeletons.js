import Skeletons from "./Skeletons"


const CommSkeletons = () => {
    let count = Math.floor(Math.random() * 10) + 3
  return (
    <div className="CommSkeletons">
        {Array(count).fill(0).map((_, i) => (
                <Skeletons key={i} />
            ))}

    </div>
  )
}

export default CommSkeletons