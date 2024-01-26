import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


import axios from "axios";

const initialState = {
    user: '',
    loggedIn: false,
    status: '',
    error: '',
    userInfo: '',
    edit: false,
    roles: {
        bands: [],
        labels: [],
        fans: []
    }


}
export const userSignup = createAsyncThunk('userDetails/userSignup',
    async ({ userBody }, { rejectWithValue }) => {

        try {
            const response = await axios.post(`/api/signup`, userBody)
            return response.data

        } catch (err) {

            return rejectWithValue(err.response.data)
        }

    }
)


export const detachUser = createAsyncThunk('userDetails/detachUser',
    async ({ roleFromUrl, hostId, attachId }, { rejectWithValue }) => {
        try {
            let link = `/api/${roleFromUrl}/${hostId}?detach=${attachId}`
            const response = await axios.put(link)
            const array = await response.data
            console.log('aU', hostId, attachId, link, array)
            return { roleFromUrl, hostId, array }
        } catch (error) {
            return rejectWithValue(error.response.data)
        }


    }
)

export const attachUser = createAsyncThunk('userDetails/attachUser',
    async ({ roleFromUrl, hostId, attachId }, { rejectWithValue }) => {
        try {
            let link = `/api/${roleFromUrl}/${hostId}?attach=${attachId}`
            const response = await axios.put(link)
            const array = await response.data
            console.log('aU', hostId, attachId, link, array)
            return { roleFromUrl, hostId, array }

        } catch (error) {
            return rejectWithValue(error.response.data)
        }



    }
)

export const createDetails = createAsyncThunk('userDetails/createDetails',
    async ({ body, role }, { rejectWithValue }) => {

        try {
            const response = await axios.post(`api/${role}s`, body)
            const user = await response.data
            console.log('uS', role, response.data)
            return { user, role }
        } catch (err) {
            return rejectWithValue(err.response.data)
        }


    }
)

export const editDetails = createAsyncThunk('userDetails/editDetails',
    async ({ id, body, role }, { rejectWithValue }) => {
        try {
            const response = await axios.put(`api/${role}s/${id}`, body)
            const user = response.data
            console.log('uSedit', role, response.data)
            return user
        } catch (err) {
            console.log('eediter', err)
            return rejectWithValue(err.response.data)
        }

    }
)

export const fetchRoles = createAsyncThunk('roles/fetchRoles',
    async ( rejectWithValue ) => {
        const bandsRes = await axios.get(`api/bands`)
        const labelsRes = await axios.get(`api/labels`)
        const fansRes = await axios.get(`api/fans`)
        try {

             //const [bands, labels, fans] = await Promise.all([bandsRes, labelsRes, fansRes])
            //console.log('fb',bands.data, labels.data, fans.data)
            console.log('fR', bandsRes.data, labelsRes.data, fansRes.data)
            return [bandsRes.data, labelsRes.data, fansRes.data]

        } catch (error) {
            return rejectWithValue(error.response.data)
        }


    }
)

// export const fetchRoles = createAsyncThunk('roles/fetchRoles',
//     async () => {
//         const bandsRes = await axios.get(`api/bands`)
//         const labelsRes = await axios.get(`api/labels`)
//         const fansRes = await axios.get(`api/fans`)
//         // const [bands, labels, fans] = await Promise.all([bandsRes, labelsRes, fansRes])
//         //console.log('fb',bands.data, labels.data, fans.data)
//         console.log('fR', bandsRes.data, labelsRes.data, fansRes.data)
//         return [bandsRes.data, labelsRes.data, fansRes.data]

//     }
// )


// export const fetchRoles = createAsyncThunk('roles/fetchRoles',
//     async ({rejectWithValue}) => {
//         const bands = await axios.get(`api/bands`)
//         const labels = await axios.get(`api/labels`)
//         const fans = await axios.get(`api/fans`)
//         // const [bands, labels, fans] = await Promise.all([bandsRes, labelsRes, fansRes])
//         //console.log('fb',bands.data, labels.data, fans.data)
//         console.log('fR', bands.data, labels.data, fans.data)



//         axios.all([bands, labels, fans]).then(
//             axios.spread((...res) => {
//                    const bandsRes = res[0]
//                    const labelsRes = res[1]
//                    const fansRes = res[2]
//                 return [bandsRes.data, labelsRes.data, fansRes.data]
//             })
//         )
//             .catch((error) => {
//                 if (error.response) {
//                     // the request was made and the server responded with a status code
//                     console.log('axio',error.response);
//                     console.log(error.response.status);
//                     console.log('eediter', error)
//             return rejectWithValue(error.response.data)
//                 } else if (error.request) {
//                     // the request was made but no response was received
//                     console.log("network error");
//                     rejectWithValue(error.request)
//                 } else {
//                     // something happened when setting up the request
//                     console.log('wtaf',error);
//                 }
//             });
//     }
// )
//ADD REST OF THE CASES FOR FETCHES

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload
            state.loggedIn = true

        },
        toggleLog: (state, action) => {
            state.loggedIn = action.payload
            //if state empty logged in = false
        },
        userDelete: (state) => {
            state.user = ''
        },

        addUserInfo: (state, action) => {
            state.userInfo = action.payload
        },
        toggleEdit: (state, action) => {
            state.edit = action.payload
        },
        addError: (state, action) => {
            state.error = action.payload
        }

    },
    extraReducers(builder) {
        builder
            .addCase(createDetails.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(createDetails.rejected, (state, action) => {
                console.log('rjedct', action)
                state.status = 'rejected'
                state.error = action.payload || action.error.message
            })
            .addCase(createDetails.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.error = ''
                state.userInfo = action.payload.user
                const arrayByRole = (action.payload.role === 'band' ? state.roles.bands : (action.payload.role === 'label' ? state.roles.labels : state.roles.fans))
                arrayByRole.push(action.payload.user)


            })
            .addCase(editDetails.rejected, (state, action) => {
                console.log('rj edit', action)
                state.status = 'rejected'
                state.error = action.payload || action.error.message
            })
            .addCase(editDetails.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.error = ''
                state.userInfo = action.payload
                const arrayByRole = (state.user.role === 'band' ? state.roles.bands : (state.user.role === 'label' ? state.roles.labels : state.roles.fans))
                //edge case when user is null
                //    console.log('addcase',arrayByRole.findIndex((item)=>item._id === action.payload._id)) 
                let editedIndex = arrayByRole.findIndex((item) => item._id === action.payload._id)
                arrayByRole.splice(editedIndex, 1, action.payload)
            })
            .addCase(fetchRoles.fulfilled, (state, action) => {

                state.roles.bands = action.payload[0]
                state.roles.labels = action.payload[1]
                state.roles.fans = action.payload[2]
            })
            .addCase(fetchRoles.rejected, (state, action) => {
                console.log('fetcredux', action, action.payload)
                state.error = action.payload || action.error.message
            })
            .addCase(attachUser.fulfilled, (state, action) => {
                const arrayByRole = state.user.role === 'band' ? state.roles.labels : state.roles.bands
                console.log('attUsr', arrayByRole)
                let arrayIndex = arrayByRole.findIndex((item) => item._id === action.payload.hostId)
                arrayByRole[arrayIndex].attachedId = action.payload.array
            })
            .addCase(attachUser.rejected, (state, action) => {
                console.log('atach', action, action.payload)
                state.status = 'rejected'
                state.error = action.payload || action.error.message

            })
            .addCase(detachUser.fulfilled, (state, action) => {
                const arrayByRole = state.user.role === 'band' ? state.roles.labels : state.roles.bands
                console.log('dettUsr', arrayByRole)
                let arrayIndex = arrayByRole.findIndex((item) => item._id === action.payload.hostId)
                arrayByRole[arrayIndex].attachedId = action.payload.array
            })
            .addCase(detachUser.rejected, (state, action) => {
                console.log('detach', action, action.payload)
                state.status = 'rejected'
                state.error = action.payload || action.error.message

            })
            .addCase(userSignup.fulfilled, (state, action) => {

                state.user = action.payload
                state.loggedIn = state.user ? true : false
            })
            .addCase(userSignup.rejected, (state, action) => {

                state.error = action.payload.errors
                //state.loggedIn = state.user ? true : false

            })
    }
})

export default userSlice.reducer

export const { addUser, toggleLog, userDelete, initedToggle, addUserInfo, toggleEdit, addRole, addError } = userSlice.actions
export const selectUser = (state) => state.user.user
export const selectLoggedIn = (state) => state.user.loggedIn
export const selectStatus = (state) => state.user.status
export const selectError = (state) => state.user.error
export const selectUserInfo = (state) => state.user.userInfo
export const selectUserEdit = (state) => state.user.edit
export const selectRoles = (state) => state.user.roles
