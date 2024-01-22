import Page from "../template/Page.js";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {selectReturnedCount, selectUnpaidCount} from "../../features/orderCount/orderCountSlice.js";

function OrdersUnpaid() {
    const {t} = useTranslation();
    const unpaidCount = useSelector(selectUnpaidCount);

    return (
        <Page pageTitle={"orders"}>
            <div className="container-fluid bg-body page-header-color">
                <div>
                    <h2 className={"p-4"}>
                        {t("orders-unpaid")}
                    </h2>
                </div>
                <div>
                    <h4 className={"p-4"}>
                        {t("total")}: {unpaidCount}
                    </h4>
                </div>
            </div>
        </Page>
    );
}

export default OrdersUnpaid
