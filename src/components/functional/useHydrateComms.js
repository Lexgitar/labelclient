import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
    fetchComment,
    selectbyId
} from '../../slices/commentsSlice'


//POST or PUT
let dispatchType = 'PUT'



//


const useHydrateComms = (id) => {

    const [comments, setComments] = useState(null)

    const dispatch = useDispatch()

    // profileComment contains all comments per profile
    const [profileComment] = useSelector(state => selectbyId(state, id))
    console.log('hyd-pcom', profileComment)

    useEffect(() => {


        if (!profileComment) {
            console.log('disptching')
            dispatch(fetchComment({ id }))
        } else if (profileComment && profileComment.comments) {
           
            console.log('pcom.coms', profileComment.comments)
            setComments(profileComment.comments)
        }

    }, [profileComment])

    return { comments }
}

export default useHydrateComms