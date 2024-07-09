import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
    fetchComment,
    selectbyId
} from '../../slices/commentsSlice'



const useHydrateComms = (id) => {

    const [comments, setComments] = useState(null)
    const [onlyPost, setOnlyPost] = useState(true)
    // user logged can't initialize own ProfileComments


    const dispatch = useDispatch()

    // profileComment contains all comments per profile
    const [profileComment] = useSelector(state => selectbyId(state, id))
    console.log('hyd-pcom', profileComment)

    useEffect(() => {

        //THEN try etc
        if (!profileComment) {
            console.log('disptching')

            dispatch(fetchComment({ id }))
        } else if (profileComment && profileComment.comments.length === 0) {
            console.log('pcom.coms else if', profileComment.comments)
            setComments('no comments yet')
            setOnlyPost(false)



        } else if (profileComment && profileComment.comments) {
            //all can comment 
            console.log('pcom.coms', profileComment.comments)
            setComments(profileComment.comments)
            setOnlyPost(false)
        }
    }, [id, profileComment])

    return { comments, onlyPost }
}

export default useHydrateComms