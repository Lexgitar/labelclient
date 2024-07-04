import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectLoggedIn, selectUser } from '../../slices/userSlice'


const useCanDeleteComment = (profileId, authorId) => {
    const [canDelete, setCanDelete] = useState(false)

    let isLoggedIn = useSelector(selectLoggedIn)
    let user = useSelector(selectUser)
    //console.log('user from useCDC', user)

    useEffect(() => {
        if (isLoggedIn && user) {
            if (user.itemId === profileId || user.itemId === authorId ) {
                setCanDelete(true)
            }
        }
    },[user])

    return {canDelete}
}

export default useCanDeleteComment