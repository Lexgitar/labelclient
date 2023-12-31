import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: [],
    loggedIn: false,
    status: '',
    error: '',
    userInfo: '',
    inited: false,
    roles: {
        bands: [],
        labels: [],
        fans: []
    }


}

export const createDetails = createAsyncThunk('userDetails/createDetails',
    async ({ body, role }) => {
        const response = await axios.post(`api/${role}s`, body)
        const user = response.data
        console.log('uS', role, response.data)
        return user

    }
)

export const fetchRoles = createAsyncThunk('roles/fetchRoles',
    async () => {
        const bandsRes = await axios.get(`api/bands`)
        const labelsRes = await axios.get(`api/labels`)
        const fansRes = await axios.get(`api/fans`)
        // const [bands, labels, fans] = await Promise.all([bandsRes, labelsRes, fansRes])
        //console.log('fb',bands.data, labels.data, fans.data)
         console.log('fR', bandsRes.data, labelsRes.data, fansRes.data)
        return [bandsRes.data, labelsRes.data, fansRes.data]
       
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user.push(action.payload)
        },
        toggleLog: (state, action) => {
            state.loggedIn = action.payload
            //if state empty logged in = false
        },
        userDelete: (state) => {
            state.user.pop()
        },
        initedToggle: (state) => {
            state.inited = false
        }
    },
    extraReducers(builder) {
        builder
            .addCase(createDetails.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(createDetails.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })
            .addCase(createDetails.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.error = ''
                state.userInfo = action.payload
                state.inited = true

            })
            .addCase(fetchRoles.fulfilled, (state, action)=>{
                
                state.roles.bands = action.payload[0]
                state.roles.labels = action.payload[1]
                state.roles.fans = action.payload[2]
            })
    }
})

export default userSlice.reducer

export const { addUser, toggleLog, userDelete, initedToggle } = userSlice.actions
export const selectUser = (state) => state.user.user[0]
export const selectLoggedIn = (state) => state.user.loggedIn
export const selectStatus = (state) => state.user.status
export const selectError = (state) => state.user.error
export const selectUserInfo = (state) => state.user.userInfo
export const selectInited = (state) => state.user.inited
export const selectRoles = (state) => state.user.roles