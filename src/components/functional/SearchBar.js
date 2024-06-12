import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { searchInRole } from '../../slices/userSlice'




const SearchBar = () => {
    const dispatch = useDispatch()

    let page = useLocation().pathname
    let alocation = page.includes('bands')? 'bands' : (page.includes('labels')? 'labels' : 'artists')

    const [stateTerm, setStateTerm] = useState('')
    const [placeholder , setPlaceholder] = useState(`Search ${alocation}`)

    const handleOnChange = (e)=>{
        e.preventDefault();
        setStateTerm(e.target.value)
        
        
        
        
        }

        const handleSubmit =(e)=>{
            e.preventDefault();
            if(stateTerm !=''){
                dispatch(searchInRole({alocation, stateTerm}))
            }
          }

  return (
    <div id="search-container">
        <form className="search" 
         onSubmit={handleSubmit} 
        >
            <input aria-label="Search posts" 
            id="search" type="search" 
             placeholder={placeholder}
             value ={stateTerm}
             onChange={handleOnChange}
            />  
        </form>   
  </div>
  )
}

export default SearchBar