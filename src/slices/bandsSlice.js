import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bands:[
        {_id:1, name: 'bandsxela', location:'laak'},
        {_id:2, name: 'bandsxela', location:'laak'},
        {_id:3, name: 'bandsxela', location:'laak'},
        {_id:4, name: 'bandsxela', location:'laak'},
        {_id:5, name: 'bandsxela', location:'laak'},
        {_id:6, name: 'bandsxela', location:'laak'},
        {_id:7, name: 'bandsxela', location:'laak'},
        {_id:8, name: 'bandsxela', location:'laak'},
        {_id:9, name: 'bandsxela', location:'laak'},
        {_id:10, name: 'bandsxela', location:'laak'},
        {_id:11, name: 'bandsxela', location:'laak'},
        {_id:12, name: 'bandsxela', location:'laak'},
        {_id:13, name: 'bandsxela', location:'laak'},
        {_id:14, name: 'bandsxela', location:'laak'},
        {_id:15, name: 'bandsxela', location:'laak'},
    ]
}

export const bandsSlice = createSlice({
    name:'bands',
    initialState,
    reducers:{
        addBand:(state, action)=>{
            state.bands.push(action.payload)
        }
    }
})

export default bandsSlice.reducer

export const {addBand} = bandsSlice.actions

export const selectAllBands = (state)=> state.bands.bands
