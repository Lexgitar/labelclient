import React, { useEffect, useState } from 'react'
import WhatshotIcon from '@mui/icons-material/Whatshot';
//import ElderlyIcon from '@mui/icons-material/Elderly';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';

import FilterByGenre from './FilterByGenre';

import { useDispatch, useSelector } from 'react-redux';
import { filterByNew, filterAtoZ, filterByHot, sortByGenre, filterByGenre, selectSearchRole } from '../../slices/userSlice';



const FilterTile = () => {
  const [byGenre, setByGenre] = useState('Sort by Genre')
  const [filterOn, setFilterOn] = useState(false)
  const [genre, setGenre] = useState('')
  let pot = useSelector(selectSearchRole)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(filterByGenre(''))
  }, [])

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





  return (
    <div>
      <FiberNewIcon onClick={handleNew} />
      <WhatshotIcon onClick={handleHot} />
      <SortByAlphaIcon onClick={handleAlpha} />
      {pot !== 'artists' && <GraphicEqIcon onClick={handleGenre} />}
      {/* {pot !== 'artists' &&  
      <br /> &&
      <button onClick={handleGenre} >{byGenre}</button>}
      <br /> */}
      {pot !== 'artists' && <FilterByGenre />}

    </div>
  )
}

export default FilterTile