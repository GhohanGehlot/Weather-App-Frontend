import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type ForecastDataState from "../../Interfaces/ForecastDataState";
import axiosInstance  from "../../Config/axiosInstance.ts";



const initialState: ForecastDataState = {
    status:  'default',
    data: undefined,
}

export const fetchData = createAsyncThunk('data/fetchdata', async () => {
    try {
        const response = await axiosInstance.get(`forecast.json?key=${import.meta.env.VITE_API_KEY}&days=7&aqi=yes&q=Mumbai`);
        console.log(response);
        return response;

    } catch (error) {
        console.log("Error")
    }
});



 const forecastSlice = createSlice({
    name: 'forecast',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled , (state , action ) => {

            if(!action.payload){
                return;
            }
            console.log("action" , action)
            
        })
    }
});

export default forecastSlice.reducer;