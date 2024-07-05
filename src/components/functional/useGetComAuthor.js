import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { selectNameById } from "../../slices/userSlice"

const useGetComAuthor = (id) => {
    const [author, setAuthor] = useState('Unknown')
    const [mane, setMane] = useState('')

    const nameA = useSelector(state => selectNameById(state, id))
    
    useEffect(() => {
        
        
        setMane(nameA)
    }, [])

    console.log('name', nameA, 
        
        id,
    )
    return { author, mane }
}

export default useGetComAuthor