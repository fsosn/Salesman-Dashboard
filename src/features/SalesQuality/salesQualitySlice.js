import {createSlice} from '@reduxjs/toolkit';
import {profile1} from "../profile1.js";

const initialState = {
    salesQuality: profile1.salesQuality
};

const salesQualitySlice = createSlice({
    name: 'salesQuality',
    initialState,
    reducers: {
        changeSalesQuality: (state, action) => {
            state.salesQuality = action.payload
        },
    }
});

export const { changeSalesQuality } = salesQualitySlice.actions;

export default salesQualitySlice.reducer;
