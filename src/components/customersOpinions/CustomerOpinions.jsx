import {useDispatch, useSelector} from 'react-redux';
import CustomerOpinion from './CustomerOpinion';
import './CustomerOpinions.css'
import {useTranslation} from "react-i18next";
import {getAll, getNegative, getPositive} from "../../features/CustomersOpinions/customersOpinionsSlice.js";

const CustomersOpinions = () => {
    const dispatch = useDispatch();

    const type = useSelector((state) => state.customersOpinions.type);
    const opinions = useSelector((state) => state.customersOpinions.customersOpinions);
    const {t} = useTranslation();

    const handleAll = () => {
        dispatch(getAll());
    };

    const handlePositive = () => {
        dispatch(getPositive());
    };

    const handleNegative = () => {
        dispatch(getNegative());
    };

    return (
        <div>
            <div className="customers-btn-container">
                <button onClick={handleAll} className="customer-opinions-btn">{t('all')}</button>
                <button onClick={handlePositive} className="customer-opinions-btn">{t('positive')}</button>
                <button onClick={handleNegative} className="customer-opinions-btn">{t('negative')}</button>
            </div>
            <div className="customers-opinions">
                {opinions.map((opinion) => (
                    <CustomerOpinion key={opinion.id} opinion={opinion}/>
                ))}
            </div>
        </div>
    );
};

export default CustomersOpinions;
