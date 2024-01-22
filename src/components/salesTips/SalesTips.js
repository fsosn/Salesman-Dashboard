import "./SalesTips.css"
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

function SalesTips() {
    const {t} = useTranslation();
    return (
        <div className="d-flex flex-column align-items-center">
            <div>
                <svg width="204" height="76" viewBox="0 0 204 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="97.4432" width="31.2" height="18.5568" fill="#962DFF"/>
                    <rect y="88.1648" width="31.2" height="9.27841" fill="#C893FD"/>
                    <rect y="80.6722" width="31.2" height="7.49251" fill="#E0C6FD"/>
                    <path
                        d="M0 79.9775C0 77.7683 1.79086 75.9775 4 75.9775H27.2C29.4091 75.9775 31.2 77.7683 31.2 79.9775V80.6722H0V79.9775Z"
                        fill="#F0E5FC"/>
                    <rect x="43.2" y="84.8519" width="31.2" height="31.148" fill="#962DFF"/>
                    <rect x="43.2" y="69.7233" width="31.2" height="15.1285" fill="#C893FD"/>
                    <rect x="43.2" y="52.5717" width="31.2" height="17.1517" fill="#E0C6FD"/>
                    <path
                        d="M43.2 48.2962C43.2 46.0871 44.9908 44.2962 47.2 44.2962H70.4C72.6091 44.2962 74.4 46.0871 74.4 48.2962V52.5718H43.2V48.2962Z"
                        fill="#F0E5FC"/>
                    <rect x="86.4" y="75.7938" width="31.2" height="40.2062" fill="#962DFF"/>
                    <rect x="86.4" y="57.1275" width="31.2" height="18.6664" fill="#C893FD"/>
                    <rect x="86.4" y="36.1172" width="31.2" height="21.0103" fill="#E0C6FD"/>
                    <path
                        d="M86.4 28.7252C86.4 26.516 88.1909 24.7252 90.4 24.7252H113.6C115.809 24.7252 117.6 26.516 117.6 28.7252V36.1172H86.4V28.7252Z"
                        fill="#F0E5FC"/>
                    <rect x="129.6" y="69.2547" width="31.2" height="46.7453" fill="#962DFF"/>
                    <rect x="129.6" y="45.4021" width="31.2" height="23.8526" fill="#C893FD"/>
                    <rect x="129.6" y="19.2056" width="31.2" height="26.1965" fill="#E0C6FD"/>
                    <path
                        d="M129.6 11.8135C129.6 9.6044 131.391 7.81354 133.6 7.81354H156.8C159.009 7.81354 160.8 9.6044 160.8 11.8135V19.2056H129.6V11.8135Z"
                        fill="#F0E5FC"/>
                    <rect x="172.8" y="73.8804" width="31.2" height="42.1197" fill="#962DFF"/>
                    <rect x="172.8" y="53.586" width="31.2" height="20.2944" fill="#C893FD"/>
                    <rect x="172.8" y="32.3898" width="31.2" height="21.1962" fill="#E0C6FD"/>
                    <path
                        d="M172.8 25.042C172.8 22.8329 174.591 21.042 176.8 21.042H200C202.209 21.042 204 22.8329 204 25.042V32.3898H172.8V25.042Z"
                        fill="#F0E5FC"/>
                </svg>
            </div>
            <Link to={"/sales-tips"} className="d-flex justify-content-center align-items-center text-center tips-text">
                        {`${t("learn-more")} \u00BB`}
            </Link>
        </div>
    );
}

export default SalesTips