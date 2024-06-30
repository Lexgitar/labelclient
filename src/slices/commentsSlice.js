import {
    createSlice,
    createAsyncThunk,
    createSelector,
    //createSelector 
} from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
    pcomms: [
        // { _id: "66799c52f1da1673e0e36f4f", profileId: "66770bcf65ac34fbc3354ae1", comments: { _id: "66799c52f1da1673e0e36f4e", body: "comm on lb  ", authorId: "66770d7984e58dfe2986033f" }, createdAt: "2024-06-24T16:18:26.578Z", updatedAt: "2024-06-24T16:18:26.578Z", __v: 0 }
    ],
    error: '',
}


export const fetchComment = createAsyncThunk('comment/fetchComment',
    async ({ id }, { rejectWithValue }) => {
        try {
            
            const response = await axios.get(`/api/comment/${id}`)
            const pComm = response.data
            console.log('ftechcom', response.data)
            return pComm
        } catch (err) {
            // console.log('fetchccome r-or', err)
            // console.log('fcomdata er', err.response.data)
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
                console.log('errr',action.payload,action.error.message)
            })
    }
})


export default commentsSlice.reducer

export const selectPcomms = (state) => state.comments.pcomms
export const selectItemId = (state, id) => id

export const selectbyId = 
    createSelector(
            [selectPcomms, selectItemId],
         (pcomms, id) => pcomms.filter((pcom) => pcom.profileId === id)

    ) 

// export const selectbyId = (state, id) =>
//     state.comments.pcomms.filter((pcom) => pcom.profileId === id)