import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { searchInRole } from '../../slices/userSlice'




const SearchBar = () => {
  const dispatch = useDispatch()

  let page = useLocation().pathname
  //let alocation = page.includes('bands') ? 'bands' : (page.includes('labels') ? 'labels' : 'artists')
  let alocation = page.replace('/', '')
//console.log('replace', page.replace('/', ''))
  const [stateTerm, setStateTerm] = useState('')
  const [placeholder, setPlaceholder] = useState(`Search ${alocation}`)

  useEffect(() => {
    setPlaceholder(`Search ${alocation}`)
    //setStateTerm('')
    dispatch(searchInRole([alocation, stateTerm]))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alocation, stateTerm])

  const handleOnChange = (e) => {
    e.preventDefault();
    setStateTerm(e.target.value)


  }

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(searchInRole([alocation, stateTerm]))
    setStateTerm('')
    setPlaceholder(`Search ${alocation}`)



  }

  return (
    <div id="search-container">
      <form className="search"
        onSubmit={handleSubmit}
      >
        <input aria-label="Search posts"
          id="search" type="search"
          placeholder={placeholder}
          value={stateTerm}
          onChange={handleOnChange}
        />
      </form>
    </div>
  )
}

export default SearchBar