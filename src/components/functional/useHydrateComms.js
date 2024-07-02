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
    const [onlyPost, setOnlyPost] = useState(false)
   // user logged can't initialize own ProfileComments


    const dispatch = useDispatch()

    // profileComment contains all comments per profile
    const [profileComment] = useSelector(state => selectbyId(state, id))
    console.log('hyd-pcom', profileComment)

    useEffect(() => {


        if (!profileComment) {
            console.log('disptching')
            dispatch(fetchComment({ id }))
        } else if (profileComment && profileComment.comments) {
           //all can comment
            console.log('pcom.coms', profileComment.comments)
            setComments(profileComment.comments)
           
        } else if(profileComment && !profileComment.comments){
            //all can comment 
           setComments('no comments yet')
        }else{
            //if still no pCs - > only POST dispatch 
            setOnlyPost(true)
        }

    }, [profileComment])

    return { comments, onlyPost }
}

export default useHydrateComms