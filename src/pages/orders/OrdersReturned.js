import Page from "../template/Page.js";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {selectReturnedCount, selectUnpaidCount} from "../../features/orderCount/orderCountSlice.js";

function OrdersReturned() {
    const {t} = useTranslation();
    const returnedCount = useSelector(selectReturnedCount);

    return (
        <Page pageTitle={"orders"}>
            <div className="container-fluid bg-body page-header-color">
                <div>
                    <h2 className={"p-4"}>
                        {t("orders-returned")}
                    </h2>
                </div>
                <div>
                    <h4 className={"p-4"}>
                        {t("total")}: {returnedCount}
                    </h4>
                </div>
            </div>
        </Page>
    );
}

export default OrdersReturned
