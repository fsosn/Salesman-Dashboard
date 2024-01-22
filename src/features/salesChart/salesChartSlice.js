import {createSlice} from '@reduxjs/toolkit';
import {profile1} from "../profile1.js";

const initialState = {
    chartData: profile1.chartData,
};

const salesChartSlice = createSlice({
    name: 'salesChart',
    initialState,
    reducers: {
        changeSalesChartData: (state, action) => {
            state.chartData = action.payload;
        }
    },
});

export const {changeSalesChartData} = salesChartSlice.actions;
export const selectSalesChartData = (state) => state.chartData;

export default salesChartSlice.reducer;