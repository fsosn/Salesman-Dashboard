import Page from "../template/Page.js";
import {useTranslation} from "react-i18next";

function OrdersUnpaid() {
    const {t} = useTranslation();
    return (
        <Page pageTitle={"orders"}>
            <div className="container-fluid bg-body">
                <h2 className={"page-header-color"}>
                    {t("orders-unpaid")}
                </h2>
            </div>
        </Page>
    );
}

export default OrdersUnpaid
