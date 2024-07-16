import { Link, useLocation, } from "react-router-dom"
//import { useState } from "react"
import '../pages/pages.css'
import { selectRoles } from '../slices/userSlice'
import { useSelector } from 'react-redux'







const ProfileTile =  ({ profile }) => {

    let bands = useSelector(selectRoles).bands
    let labels = useSelector(selectRoles).labels
    let artists = useSelector(selectRoles).artists

    //let usersPool = useLocation().pathname.includes('labels') ? labels : bands
    let location = useLocation().pathname
    let alocation = location.includes('bands')? 'bands' : (location.includes('labels')? 'labels' : 'artists')
    const roleFinder = (id) => {
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


    //console.log('PTile', profile)
    // console.log('patnew', pathNew)
    return (

        <div >
            <Link key={profile.id} to={`${profile._id}`}>
                {/* <p>id: {profile._id}</p> */}
                <p>Name: {profile.name}</p>
                <p>Location: {profile.location}</p>
                {profile.genre && <p>Genre: {profile.genre}</p>}
                <p>About: {profile.about}</p>
                <p>Link: {profile.links}</p>
                {/* <p>role: {profile.role}</p> */}
                <p>Collabs : {(!!profile.attachedId.length && profile.attachedId.length) || ' 0' }</p>
            </Link>
            {/* {!!profile.attachedId.length && profile.attachedId.map((id) => (


                // <Link to={roleFinder(id)} key={id}>id:{id}</Link>
                roleFinder(id)


            ))} */}

           

        </div>
    )



}




export default ProfileTile