import React from 'react'
import { selectRoles } from '../../slices/userSlice'
import { useSelector } from 'react-redux'
import { Link, useLocation, } from "react-router-dom"

const FindRole = ({id}) => {
    let bands = useSelector(selectRoles).bands
    let labels = useSelector(selectRoles).labels
    let artists = useSelector(selectRoles).artists
    

    //let usersPool = useLocation().pathname.includes('labels') ? labels : bands
    let location = useLocation().pathname
    let alocation = location.includes('bands')? 'bands' : (location.includes('labels')? 'labels' : 'artists')
    
        let rolePools = alocation === 'labels' ? [bands, artists] : alocation === 'bands' ? [labels, artists] : [bands, labels];
        let path = ''
        let name = ''
        rolePools.forEach(roleArray => {
            roleArray.forEach((roleObject) => {
                //console.log('inside rolefinder', roleObject, 'and id', id)
                //console.log('pools', rolePools)
                if (roleObject._id === id) {
                    path = `/${roleObject.role}s/${id}`
                    name = roleObject.name

                }
            })
        })
        
        return <Link to={path} key={id}>id:{name}</Link>

    
}

export default FindRole