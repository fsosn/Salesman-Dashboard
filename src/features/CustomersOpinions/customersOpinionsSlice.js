import {createSlice} from '@reduxjs/toolkit';
import {
    customersOpinionsAll,
} from "../../model/opinions/CustomersOpinions.js";
import {profile1} from "../profile1.js";


export const TYPE_POSITIVE = "positive";
export const TYPE_NEGATIVE = "negative";
export const TYPE_ALL = "all";

const initialState = {
    type: TYPE_POSITIVE,
    opinions: profile1.opinions,
    customersOpinions: customersOpinionsAll,
};

const customersOpinionsSlice = createSlice({
    name: 'customersOpinions',
    initialState,
    reducers: {
        changeOpinions: (state, action) => {
            let currentOpinions = action.payload
            state.opinions = currentOpinions
            state.customersOpinions = currentOpinions.customersOpinionsAll;
        },
        getAll: (state) => {
            state.type = TYPE_ALL;
            state.customersOpinions = state.opinions.customersOpinionsAll;
        },
        getNegative: (state) => {
            state.type = TYPE_NEGATIVE
            state.customersOpinions = state.opinions.customersOpinionsNegative
        },
        getPositive: (state) => {
            state.type = TYPE_POSITIVE
            state.customersOpinions = state.opinions.customersOpinionsPositive
        },
    },
});

export const { getAll, getNegative, getPositive, changeOpinions} = customersOpinionsSlice.actions;

export default customersOpinionsSlice.reducer;
