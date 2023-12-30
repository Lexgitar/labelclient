import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:[],
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
            //if state empty logged in = false
        },
        userDelete:(state)=>{
            state.user.pop()
        }
    }
})

export default userSlice.reducer

export const{ addUser, toggleLog, userDelete} = userSlice.actions
export const selectUser = (state)=> state.user.user[0] 
export const selectLoggedIn = (state)=> state.user.loggedIn