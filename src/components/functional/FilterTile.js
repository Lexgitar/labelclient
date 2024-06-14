import React, { useEffect, useState } from 'react'
import WhatshotIcon from '@mui/icons-material/Whatshot';
//import ElderlyIcon from '@mui/icons-material/Elderly';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import FiberNewIcon from '@mui/icons-material/FiberNew';

import { useDispatch, useSelector } from 'react-redux';
import { filterByNew, filterAtoZ, filterByHot, sortByGenre,filterByGenre, selectSearchRole } from '../../slices/userSlice';

const options = [
  { value: 'metal', label: 'Metal' },
  { value: 'pop', label: 'Pop' },
  { value: 'rap', label: 'Rap' }
]

const FilterTile = () => {
  const [byGenre, setByGenre] = useState('Sort by Genre')
  const [filterOn, setFilterOn] = useState(false)
  const [genre, setGenre] = useState('')
  let pot = useSelector(selectSearchRole)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(filterByGenre(''))
  },[])

  const handleNew = () => {
    dispatch(filterByNew())
  }


  const handleAlpha = () => {
    dispatch(filterAtoZ())
  }

  const handleHot = () => {
    dispatch(filterByHot())
  }

  const handleGenre = () => {
    dispatch(sortByGenre())
  }

  const handleGenreFilter = () => {
    dispatch(filterByGenre(genre))
  }

  // useEffect(()=>{
  //   dispatch(filterByGenre(genre))
  // },[genre])

  return (
    <div>
      <WhatshotIcon onClick={handleHot} />
      <FiberNewIcon onClick={handleNew} />
      <SortByAlphaIcon onClick={handleAlpha} /> 
      {<button  >Filter by Genre</button>}
      <>
                    <label htmlFor="genre"> </label><br />
                    <select name="" id="genre"
                        
                        onChange={(e) => dispatch(filterByGenre(e.target.value))}
                        required
                        form='userform'
                    >
                        <option value="">--select--</option>
                        {/* <option value="">--Select genre--</option> */}
                        {options.map(item => (
                            <option key={item.value} value={item.value}>{item.label}</option>
                        ))}
                    </select>
                </>
       <br />
      {pot !== 'artists' && <button onClick={handleGenre} >{byGenre}</button>}

    </div>
  )
}

export default FilterTile