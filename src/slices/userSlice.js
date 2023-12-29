import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:'',
    loggedIn: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        addUser:(state, action)=>{
            state.user.push(action.payload)
        },
        toggleLog:(state, action)=>{
            state.loggedIn = action.payload
        }
    }
})

export default userSlice.reducer

export const{ addUser, toggleLog} = userSlice.actions
export const selectUser = (state)=> state.user.user 
export const selectLoggedIn = (state)=> state.user.loggedIn