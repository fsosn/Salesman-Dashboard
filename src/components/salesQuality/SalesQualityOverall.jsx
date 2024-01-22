import {useTranslation} from "react-i18next";

let winIcon = "https://cdn.icon-icons.com/icons2/1603/PNG/512/awward-reward-cup-win-first-place_108578.png"

const SalesQualityOverall = ({value}) => {
    const {t} = useTranslation();

    return <div className='sales-quality-overall-container'>
        {value === 5 ? <div style={{display: 'flex'}}>
            <h5 style={{fontWeight: 600, fontSize: '17px'}}>{t("Top performer")}</h5>
            <img src={winIcon} style={{width: '25px', height: '25px', marginLeft: '0.6rem'}}/>
        </div> : <h5 style={{fontSize: '15px'}}>{t("Top performer")}</h5>}
        {value === 4 ? <div style={{display: 'flex'}}>
            <h5 style={{fontWeight: 600, fontSize: '17px'}}>{t("Expert Seller")}</h5>
            <img src={winIcon} style={{width: '25px', height: '25px', marginLeft: '0.6rem'}}/>
        </div> : <h5 style={{fontSize: '15px'}}>{t("Expert Seller")}</h5>}
        {value === 3 ? <div style={{display: 'flex'}}>
            <h5 style={{fontWeight: 600, fontSize: '17px'}}>{t("Competent Seller")}</h5>
            <img src={winIcon} style={{width: '25px', height: '25px', marginLeft: '0.6rem'}}/>
        </div> : <h5 style={{fontSize: '15px'}}>{t("Competent Seller")}</h5>}
        {value === 2 ? <div style={{display: 'flex'}}>
            <h5 style={{fontWeight: 600, fontSize: '17px'}}>{t("Average Seller")}</h5>
            <img src={winIcon} style={{width: '25px', height: '25px', marginLeft: '0.6rem'}}/>
        </div> : <h5 style={{fontSize: '15px'}}>{t("Average Seller")}</h5>}
        {value === 1 ? <div style={{display: 'flex'}}>
            <h5 style={{fontWeight: 600, fontSize: '17px'}}>{t("Novice Seller")}</h5>
            <img src={winIcon} style={{width: '25px', height: '25px', marginLeft: '0.6rem'}}/>
        </div> : <h5 style={{fontSize: '15px'}}>{t("Novice Seller")}</h5>}
    </div>
}

export default SalesQualityOverall;