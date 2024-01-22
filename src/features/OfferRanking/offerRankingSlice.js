import { createSlice } from '@reduxjs/toolkit';
import { profile1 } from "../profile1.js";

export const TYPE_MOST = "Most";
export const TYPE_LEAST = "Least";

const initialState = {
    type: TYPE_MOST,
    currentlyShown: profile1.offersRanking.offersProductsMost,
    offersRanking: profile1.offersRanking
};

const offersRankingSlice = createSlice({
    initialState,
    name: 'offersRanking',
    reducers: {
        changeOfferRanking: (state, action) => {
            let currentOffersRanking = action.payload
            state.offersRanking = currentOffersRanking
            state.type = TYPE_MOST;
            state.currentlyShown = currentOffersRanking.offersProductsMost;
        },
        getMost: (state) => {
            state.type = TYPE_MOST;
            state.currentlyShown = state.offersRanking.offersProductsMost;
        },
        getLeast: (state) => {
            state.type = TYPE_LEAST;
            state.currentlyShown = state.offersRanking.offersProductsLeast;
        },
    },
});

export const { getMost, getLeast, changeOfferRanking } = offersRankingSlice.actions;

export default offersRankingSlice.reducer;
