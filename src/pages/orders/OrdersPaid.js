import Page from "../template/Page.js";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {selectPaidCount} from "../../features/orderCount/orderCountSlice.js";

function OrdersPaid() {
    const {t} = useTranslation();
    const paidCount = useSelector(selectPaidCount);

    return (
        <Page pageTitle={"orders"}>
            <div className="container-fluid bg-body page-header-color">
                <div>
                    <h2 className={"p-4"}>
                        {t("orders-paid")}
                    </h2>
                </div>
                <div>
                    <h4 className={"p-4"}>
                        {t("total")}: {paidCount}
                    </h4>
                </div>
            </div>
        </Page>
    );
}

export default OrdersPaid
