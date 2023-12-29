import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    labels:[
        {_id:1, name: 'labelsxe', location:'label'},
    {_id:2, name: 'labelsxe', location:'label'},
    {_id:3, name: 'labelsxe', location:'label'},
    {_id:4, name: 'labelsxe', location:'label'},
    {_id:5, name: 'labelsxe', location:'label'},
    {_id:6, name: 'labelsxe', location:'label'},
    {_id:7, name: 'labelsxe', location:'label'},
    {_id:8, name: 'labelsxe', location:'label'},
    {_id:9, name: 'labelsxe', location:'label'},
    {_id:10, name: 'labelsxe', location:'label'},
    {_id:11, name: 'labelsxe', location:'label'},
    {_id:12, name: 'labelsxe', location:'label'},
    {_id:13, name: 'labelsxe', location:'label'},
    {_id:14, name: 'labelsxe', location:'label'},
    {_id:15, name: 'labelsxe', location:'label'},
    ]
}

export const labelsSlice = createSlice({
    name:'labels',
    initialState,
    reducers:{
        addLabel:(state, action)=>{
            state.labels.push(action.payload)
        }
    }
})

export default labelsSlice.reducer
export const {addLabel} = labelsSlice.actions
export const selectAllLabels = (state)=> state.labels.labels