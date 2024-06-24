import { configureStore } from "@reduxjs/toolkit";

import userReducer from './slices/userSlice'
import commentReducer from './slices/commentsSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        comments : commentReducer,
    }
})