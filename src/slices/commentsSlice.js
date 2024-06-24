import { createSlice,
     createAsyncThunk,
     createSelector,
      //createSelector 
    } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
    pcomms: [],
    error: '',
}


export const fetchComment = createAsyncThunk('comments/fetchComments',
    async ({ id }, { rejectWithValue }) => {
        try {
            //const response = await axios.get(`api/comment/${id}`)
            const response = await axios.get(`api/comment/${id}`)
            const pComm = response.data
            console.log('ftechcom', response.data)
            return pComm
        } catch (err) {
            console.log('fetchccome r-or', err)
            return rejectWithValue(err.response.data)
        }

    }
)

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {

    },

    extraReducers(builder) {
        builder
            //fetch one profileComment
            .addCase(fetchComment.fulfilled, (state, action) => {
                     state.pcomms.push(action.payload)
                     
                    console.log('fcompush', action.payload)
                    state.error = ''
            })
            .addCase(fetchComment.rejected, (state, action) => {
                
                state.error = action.payload || action.error.message
        })
    }
})


export default commentsSlice.reducer

export const selectPcomms = (state) => state.comments.pcomms
export const selectPcommById = (state, id) => 
    createSelector(
        selectPcomms,
        state => state.pcomms.filter(pcom=>pcom.profileId === id)
) 