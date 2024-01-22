import OrderBox from './OrderBox';
import {selectPaidCount, selectReturnedCount, selectUnpaidCount} from "../../features/orderCount/orderCountSlice.js";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

const OrderBoxContainer = () => {
    const paidCount = useSelector(selectPaidCount);
    const unpaidCount = useSelector(selectUnpaidCount);
    const returnedCount = useSelector(selectReturnedCount);
    const {t} = useTranslation();

    return(
    <div className="row">
        <OrderBox title={t("Paid")} number={paidCount} to="/orders/paid"/>
        <OrderBox title={t("Unpaid")} number={unpaidCount} to="/orders/unpaid"/>
        <OrderBox title={t("Returned")} number={returnedCount} to="/orders/returned"/>
    </div>);
};

export default OrderBoxContainer;
