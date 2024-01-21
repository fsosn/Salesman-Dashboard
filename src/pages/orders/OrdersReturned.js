import Page from "../template/Page.js";
import {useTranslation} from "react-i18next";

function OrdersReturned() {
    const {t} = useTranslation();
    return (<Page pageTitle={"orders"}>
            <div className="container-fluid bg-body">
                <h2 className={"p-4 page-header-color"}>
                    {t("orders-returned")}
                </h2>
            </div>
        </Page>
    );
}

export default OrdersReturned
