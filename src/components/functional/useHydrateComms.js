import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {

    fetchComment,
    selectbyId
} from "../slices/commentsSlice"


//POST or PUT
let dispatchType = 'PUT'
let noMsg = 'no comments yet'


//


const useHydrateComms = (id) => {

    const dispatch = useDispatch()

    // profileComment contains all comments per profile
    let profileComment = useSelector(state => selectbyId(state, id))
    let comments = ''

    useEffect(() => {
        if (!profileComment) {
            dispatch(fetchComment({ id }))
        }else if(profileComment && !profileComment.comments.length){
            
        } else if (profileComment && profileComment.comments.length) {
            comments = profileComment.comments
        }
    })

    return { comments }
}

export default useHydrateComms