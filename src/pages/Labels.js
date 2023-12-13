
 // "proxy":"http://localhost:3000",
//import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

//import SignUpForm from "../components/forms/SignUpForm"
import ProfileTile from "../components/ProfileTile"
import './pages.css'

const path = 'labels'

 const Labels = () => {


const users = [
    {_id:1, name: 'alex', location:'label'},
    {_id:2, name: 'alex', location:'label'},
    {_id:3, name: 'alex', location:'label'},
    {_id:4, name: 'alex', location:'label'},
    {_id:5, name: 'alex', location:'label'},
    {_id:6, name: 'alex', location:'label'},
    {_id:7, name: 'alex', location:'label'},
    {_id:8, name: 'alex', location:'label'},
    {_id:9, name: 'alex', location:'label'},
    {_id:10, name: 'alex', location:'label'},
    {_id:11, name: 'alex', location:'label'},
    {_id:12, name: 'alex', location:'label'},
    {_id:13, name: 'alex', location:'label'},
    {_id:14, name: 'alex', location:'label'},
    {_id:15, name: 'alex', location:'label'},
]
    return (
      <div className="labels">
        {users && users.map(user =>
            <Link key={user._id} to={`/${path +'/'+ user._id}`}>
                <ProfileTile
                key={user._id}
                user = {user}
                /> 
            </Link>  
    )}
        
          
      </div>
    )
  }
  
  export default Labels