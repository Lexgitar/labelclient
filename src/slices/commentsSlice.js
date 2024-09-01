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
    canCommentPost: 'false',
    dispatchType: '',
    status: '',
}

let baseUrl = 'https://labelfinder-xmhe.onrender.com'
export const fetchComment = createAsyncThunk('comment/fetchComment',
    async ({ id }, { rejectWithValue }) => {
        try {

            const response = await axios.get(`${baseUrl}/api/comment/${id}`)
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

export const fetchPostComment = createAsyncThunk('comment/fetchPostComment',
    async ({ id, body }, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${baseUrl}/api/comment?id=${id}`, { body })
            const pComm = response.data
            console.log('fetchPostCom', response.data)
            return pComm
        } catch (err) {
            console.log('err post', err)
            return rejectWithValue(err.response.data)
        }
    }
)

export const fetchPutComment = createAsyncThunk('comment/fetchPutComment',
    async ({ id, body }, { rejectWithValue }) => {
        try {
            console.log('fetchPutCom BODY and id', body, id)
            const response = await axios.put(`${baseUrl}/api/comment/${id}`, { body })
            const pComm = response.data
            //console.log('fetchPutCom BODY', body)
            console.log('fetchPutCom', response.data)
            return pComm
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)

export const fetchDeleteComment = createAsyncThunk('comment/fetchDeleteComment',
    async ({ id, authorId, commentId }, { rejectWithValue }) => {
        try {
            console.log('fetchPutCom id and authorid', id, authorId)
            const response = await axios.put(`${baseUrl}/api/comment/${id}?delete=${commentId}&authorId=${authorId}`)
            const pComm = response.data
            //console.log('fetchPutCom BODY', body)
            console.log('fetchPutDeleteCom', response.data)
            return pComm
        } catch (err) {
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
               action.payload !== 'no comments' && state.pcomms.push(action.payload) 

                console.log('fcompush', action.payload)
                state.error = ''
                state.status = action.meta.requestStatus
            })
            .addCase(fetchComment.pending, (state, action) => {
                state.status = action.meta.requestStatus
            })
            .addCase(fetchComment.rejected, (state, action) => {

                state.error = action.payload || action.error.message
                console.log('errr', action.payload, action.error.message)
                state.status = action.meta.requestStatus
            })
            .addCase(fetchPostComment.fulfilled, (state, action) => {
                state.pcomms.push(action.payload)

                console.log('fcompush - fpc', action.payload)
                state.error = ''
                state.status = action.meta.requestStatus
            })
            .addCase(fetchPostComment.pending, (state, action) => {
                state.status = action.meta.requestStatus
            })
            .addCase(fetchPostComment.rejected, (state, action) => {

                state.error = action.payload || action.error.message
                console.log('errr fpc', action.payload, action.error.message)
                state.status = action.meta.requestStatus
            })
            .addCase(fetchPutComment.fulfilled, (state, action) => {
                //EDIT !!!!!!!!!!!!!!!!!!!!!!!!!!!!! REPLACE PC in state
                //done edit
                let pIndex = state.pcomms.findIndex((item) => item._id === action.payload._id)
                state.pcomms.splice(pIndex, 1, action.payload)

                console.log('fcompush - fputc', action.payload)
                state.error = ''
                state.status = action.meta.requestStatus
            })
            .addCase(fetchPutComment.pending, (state, action) => {
                state.status = action.meta.requestStatus
            })
            .addCase(fetchPutComment.rejected, (state, action) => {

                state.error = action.payload || action.error.message
                console.log('errr fputc', action.payload, action.error.message)
            })
            .addCase(fetchDeleteComment.fulfilled, (state, action) => {

                let pIndex = state.pcomms.findIndex((item) => item._id === action.payload._id)
                state.pcomms.splice(pIndex, 1, action.payload)

                console.log('fcompush - fdelete', action.payload)
                state.error = ''

            })
            .addCase(fetchDeleteComment.rejected, (state, action) => {

                state.error = action.payload || action.error.message
                console.log('errr fputc', action.payload, action.error.message)

            })

    }
})


export default commentsSlice.reducer

export const selectComStatus = (state) => state.comments.status
export const selectPcomms = (state) => state.comments.pcomms
export const selectItemId = (state, id) => id

export const selectbyId =
    createSelector(
        [selectPcomms, selectItemId],
        (pcomms, id) => pcomms.filter((pcom) => pcom.profileId === id)

    )

// export const selectbyId = (state, id) =>
//     state.comments.pcomms.filter((pcom) => pcom.profileId === id)