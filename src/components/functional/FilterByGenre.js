import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterByGenre, selectGenreOptions } from '../../slices/userSlice'



const FilterByGenre = () => {

    const options = useSelector(selectGenreOptions)
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)

    const handleShow = () => {
        show ? setShow(false) : setShow(true);

        dispatch(filterByGenre(''))



    }

    return (
        <div>

            <button onClick={handleShow}  >Filter by Genre</button>
            {show && <>
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
            </>}
        </div>
    )
}

export default FilterByGenre