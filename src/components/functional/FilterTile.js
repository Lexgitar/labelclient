import React from 'react'
import WhatshotIcon from '@mui/icons-material/Whatshot';
//import ElderlyIcon from '@mui/icons-material/Elderly';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import FiberNewIcon from '@mui/icons-material/FiberNew';

import { useDispatch } from 'react-redux';
import { filterByNew, filterAtoZ, filterByHot } from '../../slices/userSlice';
const FilterTile = () => {
  const dispatch = useDispatch()
  const handleNew = () => {
    dispatch(filterByNew())
  }

  const handleAlpha = () => {
    dispatch(filterAtoZ())
  }

  const handleHot = () =>{
    dispatch(filterByHot())
  }

  return (
    <div>
      <WhatshotIcon onClick={handleHot} />
      <FiberNewIcon onClick={handleNew} />
      <SortByAlphaIcon onClick={handleAlpha}/>

    </div>
  )
}

export default FilterTile