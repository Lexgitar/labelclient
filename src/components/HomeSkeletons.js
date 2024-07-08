import Skeletons from "./Skeletons"


const HomeSkeletons = () => {
  return (
    <div className="HomeSkeletons">
        {Array(3).fill(0).map((_, i) => (
                <Skeletons key={i} />
            ))}

    </div>
  )
}

export default HomeSkeletons