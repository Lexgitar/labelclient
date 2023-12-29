import { configureStore } from "@reduxjs/toolkit";

import bandsReducer from './slices/bandsSlice'
import labelsReducer from './slices/labelsSlice'

export const store = configureStore({
    reducer:{
        bands: bandsReducer,
        labels: labelsReducer,
    }
})