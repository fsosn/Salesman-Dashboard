import {configureStore} from '@reduxjs/toolkit';
import customersOpinionsSlice from './features/CustomersOpinions/customersOpinionsSlice.js'
import multiAccountSlice from "./features/MultiAccount/multiAccountSlice.js";
import salesQualitySlice from "./features/SalesQuality/salesQualitySlice.js";
import orderCountSlice from "./features/orderCount/orderCountSlice.js";
import offerRankingSlice from "./features/OfferRanking/offerRankingSlice.js";
import salesChartSlice from "./features/salesChart/salesChartSlice.js";

export const store = configureStore({
    reducer: {
        customersOpinions: customersOpinionsSlice,
        multiAccounts: multiAccountSlice,
        salesQuality: salesQualitySlice,
        orderCount: orderCountSlice,
        offersRanking: offerRankingSlice,
        salesChart: salesChartSlice
    },
});
