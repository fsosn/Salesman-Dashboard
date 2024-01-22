import './SalesQualityIndex.css'
import {useTranslation} from "react-i18next";
const SalesQualityIndex = ({salesIndex}) => {
    console.log('create salesQualityIndex' + salesIndex)
    let {img, value, name} = salesIndex

    return (
        <div className="sales-quality-index-container">
            <img src={img} alt={name} className="sales-quality-index-img"/>
            <SalesQualityAndTitle rating={value} title={name} />
            <SalesQualityIndexSummary result={value}/>
        </div>
    );
};

const SalesQualityIndexSummary = ({result}) => {
    return (<div className="sales-quality-index-summary">
        {result}/8
    </div>)
}

const SalesQualityAndTitle = ({ rating, title }) => {
    const {t} = useTranslation();
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(
                <div key={i} className="sales-quality-index-star">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/2153px-Star_icon_stylized.svg.png"
                        alt={`Star ${i + 1}`}
                        className="sales-quality-index-star"
                    />
                </div>
            );
        }
        return stars;
    };

    return (
        <div className="sales-quality-index-stars-comment-container">
            <div className="sales-quality-index-stars-container">{renderStars()}</div>
            <p className="sales-quality-index-comment">{t(title)}</p>
        </div>
    );
};

export default SalesQualityIndex;