import {createSlice} from '@reduxjs/toolkit';
import {profile1} from "../profile1.js";

const initialState = {
    paid: profile1.orderCount.paid,
    unpaid: profile1.orderCount.unpaid,
    returned: profile1.orderCount.returned,
};

const orderCountSlice = createSlice({
    name: 'orderCount',
    initialState,
    reducers: {
        changeOrderCount: (state, action) => {
            state.paid = action.payload.paid;
            state.unpaid = action.payload.unpaid;
            state.returned = action.payload.returned
        }
    },
});

export const {changeOrderCount} = orderCountSlice.actions;
export const selectPaidCount = (state) => state.orderCount.paid;
export const selectUnpaidCount = (state) => state.orderCount.unpaid;
export const selectReturnedCount = (state) => state.orderCount.returned;

export default orderCountSlice.reducer;