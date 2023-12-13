
 // "proxy":"http://localhost:3000",
//import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

//import SignUpForm from "../components/forms/SignUpForm"
import ProfileTile from "../components/ProfileTile"
import FilterTile from "../components/functional/FilterTile"
import './pages.css'

const path = 'bands'

export const users = [
    {_id:1, name: 'alex', location:'laak'},
    {_id:2, name: 'alex', location:'laak'},
    {_id:3, name: 'alex', location:'laak'},
    {_id:4, name: 'alex', location:'laak'},
    {_id:5, name: 'alex', location:'laak'},
    {_id:6, name: 'alex', location:'laak'},
    {_id:7, name: 'alex', location:'laak'},
    {_id:8, name: 'alex', location:'laak'},
    {_id:9, name: 'alex', location:'laak'},
    {_id:10, name: 'alex', location:'laak'},
    {_id:11, name: 'alex', location:'laak'},
    {_id:12, name: 'alex', location:'laak'},
    {_id:13, name: 'alex', location:'laak'},
    {_id:14, name: 'alex', location:'laak'},
    {_id:15, name: 'alex', location:'laak'},
]
 const Bands = () => {


 
    return (
      <div className="bands">
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
  
  export default Bands
  