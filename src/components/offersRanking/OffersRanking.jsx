import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from "react-i18next";
import {getLeast, getMost} from "../../features/OfferRanking/offerRankingSlice.js";
import OfferRankingItem from "./OfferRankingItem.jsx";

const OffersRanking = () => {
    const dispatch = useDispatch();
    const type = useSelector((state) => state.offersRanking.type);
    const currentlyShown = useSelector((state) => state.offersRanking.currentlyShown);
    const {t} = useTranslation();

    const handleMost = () => {
        dispatch(getMost());
    };

    const handleLeast = () => {
        dispatch(getLeast());
    };

    return (
        <div>
            <div className="customers-btn-container">
                <button onClick={handleMost} className="customer-opinions-btn">{t('Most'+' frequently sold')}</button>
                <button onClick={handleLeast} className="customer-opinions-btn">{t('Least'+' frequently sold')}</button>
            </div>
            <div className="customers-opinions">
                {currentlyShown.map((offerRankingItem) => (
                    <OfferRankingItem key={offerRankingItem.id} frequency={type} offerRankingItem={offerRankingItem}/>
                ))}
            </div>
        </div>
    );
};

export default OffersRanking;
