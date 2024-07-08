import { Skeleton } from "@mui/material"

const Skeletons = () => {

    let count = Math.floor(Math.random() * 10) + 3

    return (
        <div className="skeleton">
            {Array(count).fill(0).map((_, i) => (
                <Skeleton  sx={{ bgcolor: 'grey.800' }}  width={210} key={i} />
            ))}

        </div>
    )
}

export default Skeletons