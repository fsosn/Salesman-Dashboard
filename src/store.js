import {configureStore} from '@reduxjs/toolkit';
import customersOpinionsSlice from './features/CustomersOpinions/customersOpinionsSlice.js'
import multiAccountSlice from "./features/MultiAccount/multiAccountSlice.js";
import salesQualitySlice from "./features/SalesQuality/salesQualitySlice.js";

export const store = configureStore({
    reducer: {
        customersOpinions: customersOpinionsSlice,
        multiAccounts: multiAccountSlice,
        salesQuality: salesQualitySlice
    },
});
