import { configureStore } from "@reduxjs/toolkit";

import bandsReducer from './slices/bandsSlice'
import labelsReducer from './slices/labelsSlice'
import userReducer from './slices/userSlice'

export const store = configureStore({
    reducer: {
        bands: bandsReducer,
        labels: labelsReducer,
        user: userReducer,
    }
})