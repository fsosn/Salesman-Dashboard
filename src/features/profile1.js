import {
    customersOpinionsAll,
    customersOpinionsNegative,
    customersOpinionsPositive
} from "../model/opinions/CustomersOpinions.js";
import {offersProductsLeast, offersProductsMost} from "../model/products/OffersRanking.js";
import chartData from "../model/chart/salesData1.json"

export const profile1 = {
    profileName: "Kayaks",
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
                value: 7,
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
                value: 8,
                img: "https://cdn-icons-png.flaticon.com/512/6009/6009864.png"
            },
            {
                id: 4,
                name: "Opinions status",
                value: 6,
                img: "https://cdn-icons-png.flaticon.com/512/5226/5226377.png"
            }
        ],
        overall: 4
    },
    orderCount:{
        paid: 404,
        unpaid: 7,
        returned: 21
    },
    offersRanking: {
        type: 'Most',
        offersProductsMost,
        offersProductsLeast
    },
    chartData
}