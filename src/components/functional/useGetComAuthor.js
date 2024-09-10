import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { selectNameById } from "../../slices/userSlice"

const useGetComAuthor = (id) => {
    const [author, setAuthor] = useState('Unknown')
    const [linkRole, setLinkRole] = useState('home')


    const  {name, role } = useSelector(state => selectNameById(state, id))

    useEffect(() => {
        if(name && role){
            setAuthor(name)
            setLinkRole(role)
        }
        
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //console.log('namez',  author,linkRole, id,)

    return { author, linkRole  }
}

export default useGetComAuthor