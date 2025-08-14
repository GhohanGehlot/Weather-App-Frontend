import { configureStore , getDefaultMiddleware } from "@reduxjs/toolkit";
import forecastReducer from "./Slices/forecastSlice.ts"

 const store = configureStore({
    reducer: {
        forecast: forecastReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})


export default store;