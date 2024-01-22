import {
    customersOpinionsAll,
    customersOpinionsNegative,
    customersOpinionsPositive
} from "../model/opinions/CustomersOpinions2.js";
import {offersProductsLeast, offersProductsMost} from "../model/products/OffersRanking2.js";
import chartData from "../model/chart/salesData2.json";

export const profile2 = {
    profileName: "Furniture",
    opinions: {
        customersOpinionsAll,
        customersOpinionsPositive,
        customersOpinionsNegative
    },
    salesQuality: {
        salesIndexes: [
            {
                id: 1,
                name: "Sold items",
                value: 5,
                img: "https://cdn.iconscout.com/icon/free/png-256/free-tag-sold-2-1137672.png"
            },
            {
                id: 2,
                name: "Increased interest",
                value: 3,
                img: "https://cdn-icons-png.flaticon.com/512/3742/3742713.png"
            },
            {
                id: 3,
                name: "New clients",
                value: 4,
                img: "https://cdn-icons-png.flaticon.com/512/6009/6009864.png"
            },
            {
                id: 4,
                name: "Opinions status",
                value: 7,
                img: "https://cdn-icons-png.flaticon.com/512/5226/5226377.png"
            }
        ],
        overall: 3
    },
    orderCount:{
        paid: 204,
        unpaid: 0,
        returned: 47
    },
    offersRanking: {
        type: 'Most',
        offersProductsMost,
        offersProductsLeast
    },
    chartData
}