import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


import axios from "axios";

const initialState = {
    user: '',
    loggedIn: false,
    status: '',
    error: '',
    userInfo: '',
    apiMsg: '',
    edit: false,
    toggleAtoZ: false,
    searchKeys: ['name', 'location', 'about'],
    searchTerm: '',
    searchPot: '',
    roles: {
        bands: [],
        labels: [],
        fans: [],
        artists: []
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
    async (rejectWithValue) => {
        const bandsRes = await axios.get(`api/bands`)
        const labelsRes = await axios.get(`api/labels`)
        const fansRes = await axios.get(`api/fans`)
        const artistsRes = await axios.get(`api/artists`)
        try {

            //const [bands, labels, fans] = await Promise.all([bandsRes, labelsRes, fansRes])
            //console.log('fb',bands.data, labels.data, fans.data)
            console.log('fR', bandsRes.data, labelsRes.data, fansRes.data, artistsRes.data)
            return [bandsRes.data, labelsRes.data, fansRes.data, artistsRes.data]

        } catch (error) {
            return rejectWithValue(error.response.data)
        }


    }
)

export const deleteRole = createAsyncThunk('roles/deleteRole',
    async ({ id, role }, { rejectWithValue }) => {
        try {
            const json = await axios.delete(`api/${role}s/${id}`)
            const data = await json.data
            console.log('delRol', data, role)
            return { data, id }
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    })

export const deleteUser = createAsyncThunk('roles/deleteUser',
    async (rejectWithValue) => {
        try {
            const json = await axios.delete(`api/delete`)
            const data = await json.data
            console.log('delRol', json, data,)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    })


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
        },
        searchInRole: (state, action) => {
            state.searchTerm = action.payload[1]
            state.searchPot = action.payload[0]
        },
        filterByNew: (state) => {
            state.toggleAtoZ = !state.toggleAtoZ
            state.roles.bands = state.roles.bands.slice().sort((a, b) => state.toggleAtoZ ? a.createdAt < b.createdAt : a.createdAt > b.createdAt)
            console.log(state.roles.bands[0])
        },
        filterByHot: (state) => {
            state.toggleAtoZ = !state.toggleAtoZ
            state.roles.bands = state.roles.bands.slice().sort((a, b) =>
                state.toggleAtoZ ? a.attachedId < b.attachedId : a.attachedId > b.attachedId)

        },
        filterAtoZ: (state,) => {
            state.toggleAtoZ = !state.toggleAtoZ
            state.roles.bands = state.roles.bands.slice().sort((a, b) => {

                if (!state.toggleAtoZ) {
                    if (b.name > a.name) return 1;
                    if (b.name < a.name) return -1;
                    return 0;
                } else if (state.toggleAtoZ) {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                }
            });
            console.log('toggleaz', state.toggleAtoZ)
        },
    },
    extraReducers(builder) {
        builder
            .addCase(createDetails.pending, (state, action) => {
                // state.status = 'loading'
            })
            .addCase(createDetails.rejected, (state, action) => {
                console.log('rjedct', action)
                // state.status = 'rejected'
                state.error = action.payload || action.error.message
            })
            .addCase(createDetails.fulfilled, (state, action) => {
                // state.status = 'succeeded'
                state.error = ''
                state.userInfo = action.payload.user
                const arrayByRole = (action.payload.role === 'band' ? state.roles.bands : (action.payload.role === 'label' ? state.roles.labels : (action.payload.role === 'artist' ? state.roles.artists : state.roles.fans)))
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
                const arrayByRole = (state.user.role === 'band' ? state.roles.bands : (state.user.role === 'label' ? state.roles.labels : (state.user.role === 'artist' ? state.roles.artists : state.roles.fans)))
                //add edge case when user is null
                //    console.log('addcase',arrayByRole.findIndex((item)=>item._id === action.payload._id)) 
                let editedIndex = arrayByRole.findIndex((item) => item._id === action.payload._id)
                arrayByRole.splice(editedIndex, 1, action.payload)
                console.log('paiload.role', action.payload)
                console.log('sttae rols', state.roles.fans)
                console.log('sttae rol', state.user.role)
            })
            .addCase(fetchRoles.fulfilled, (state, action) => {

                state.roles.bands = action.payload[0]
                state.roles.labels = action.payload[1]
                state.roles.fans = action.payload[2]
                state.roles.artists = action.payload[3]
                state.error = ''
            })
            .addCase(fetchRoles.rejected, (state, action) => {
                console.log('fetcredux', action, action.payload)
                state.error = action.payload || action.error.message
            })
            .addCase(attachUser.fulfilled, (state, action) => {
                //const arrayByRole = state.user.role === 'band' ? state.roles.labels : state.roles.bands
                // which array to look into 
                let roleOfArray = state.roles[action.payload.roleFromUrl]
                console.log('role of array', roleOfArray)
                //console.log('attUsr', arrayByRole)
                let arrayIndex = roleOfArray.findIndex((item) => item._id === action.payload.hostId)
                roleOfArray[arrayIndex].attachedId = action.payload.array
                state.error = ''
            })
            .addCase(attachUser.rejected, (state, action) => {
                console.log('atach', action, action.payload)
                state.status = 'rejected'
                state.error = action.payload || action.error.message

            })
            .addCase(detachUser.fulfilled, (state, action) => {
                //const arrayByRole = state.user.role === 'band' ? state.roles.labels : state.roles.bands
                let roleOfArray = state.roles[action.payload.roleFromUrl]
                // console.log('dettUsr', arrayByRole)
                let arrayIndex = roleOfArray.findIndex((item) => item._id === action.payload.hostId)
                roleOfArray[arrayIndex].attachedId = action.payload.array
                state.error = ''
            })
            .addCase(detachUser.rejected, (state, action) => {
                console.log('detach', action, action.payload)
                state.status = 'rejected'
                state.error = action.payload || action.error.message

            })
            .addCase(userSignup.fulfilled, (state, action) => {

                state.user = action.payload
                state.loggedIn = state.user ? true : false
                state.error = ''
            })
            .addCase(userSignup.rejected, (state, action) => {

                state.error = action.payload.errors
                //state.loggedIn = state.user ? true : false

            })
            .addCase(deleteRole.fulfilled, (state, action) => {
                console.log('delrolefulcase -deluser', action.payload)

                const theRole = state.user.role
                //arrays to map over
                const arrayToMap = (theRole === 'band' ? [state.roles.labels, state.roles.artists] : (theRole === 'label' ? [state.roles.bands, state.roles.artists] : [state.roles.bands, state.roles.labels]))
                if (theRole === 'band' || theRole === 'label' || theRole === 'artist') {
                    console.log('didd')
                    arrayToMap.forEach(rolArray => {
                        rolArray.forEach((element) => {
                            if (element.attachedId.includes(state.userInfo._id)) {
                                let idIndex = element.attachedId.findIndex((item) => item === state.userInfo._id)
                                element.attachedId.splice(idIndex, 1)
                                console.log('did')
                            }
                        })
                    })


                }

                const arrayByRole = (state.user.role === 'band' ? state.roles.bands : (state.user.role === 'label' ? state.roles.labels : (state.user.role === 'artist' ? state.roles.artists : state.roles.fans)))

                let editedIndex = arrayByRole.findIndex((item) => item._id === action.payload.id)
                arrayByRole.splice(editedIndex, 1)
                state.error = ''

            })
            .addCase(deleteRole.rejected, (state, action) => {
                console.log('delrolercase', action, action.payload)
                state.error = action.payload.errors

            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                console.log('deluserfulcase', action.payload)
                const theRole = state.user.role
                //arrays to map over
                const arrayToMap = (theRole === 'band' ? [state.roles.labels, state.roles.artists] : (theRole === 'label' ? [state.roles.bands, state.roles.artists] : [state.roles.bands, state.roles.labels]))
                if (theRole === 'band' || theRole === 'label' || theRole === 'artist') {
                    console.log('didd-deluser')
                    arrayToMap.forEach(rolArray => {
                        rolArray.forEach((element) => {
                            if (element.attachedId.includes(state.userInfo._id)) {
                                let idIndex = element.attachedId.findIndex((item) => item === state.userInfo._id)
                                element.attachedId.splice(idIndex, 1)
                                console.log('did')
                            }
                        })
                    })

                }


                state.apiMsg = action.payload

                const arrayByRole = (state.user.role === 'band' ? state.roles.bands : (state.user.role === 'label' ? state.roles.labels : (state.user.role === 'artist' ? state.roles.artists : state.roles.fans)))

                let editedIndex = arrayByRole.findIndex((item) => item._id === state.userInfo._id)
                arrayByRole.splice(editedIndex, 1)
                //

                state.error = ''
                state.userInfo = ''
                state.user = ''
                state.loggedIn = false

            })
            .addCase(deleteUser.rejected, (state, action) => {
                console.log('delusercase', action, action.payload)
                state.error = action.payload.errors

            })
    }
})

export default userSlice.reducer

export const { addUser, toggleLog, userDelete, initedToggle, addUserInfo, toggleEdit, addRole, addError, searchInRole, filterByNew, filterByHot, filterAtoZ } = userSlice.actions
export const selectUser = (state) => state.user.user
export const selectLoggedIn = (state) => state.user.loggedIn
export const selectStatus = (state) => state.user.status
export const selectError = (state) => state.user.error
export const selectUserInfo = (state) => state.user.userInfo
export const selectUserEdit = (state) => state.user.edit
export const selectRoles = (state) => state.user.roles
export const selectTerm = (state) => state.user.searchTerm
export const selectSearchRole = (state) => state.user.searchPot
export const selectSearchKeys = (state) => state.user.searchKeys

export const selectApiMsg = (state) => state.user.apiMsg
