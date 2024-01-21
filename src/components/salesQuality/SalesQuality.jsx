import {useSelector} from 'react-redux';
import SalesQualityIndex from "./SalesQualityIndex.jsx";
import SalesQualityOverall from "./SalesQualityOverall.jsx";
import './SalesQuality.css'

const SalesQuality = () => {
    const salesQuality = useSelector((state) => state.salesQuality.salesQuality);
    const salesQualityIndexes = salesQuality.salesIndexes

    console.log('salesQualityIndexes' + salesQualityIndexes)

    return (
        <div className="sales-quality-container-main">
            <div className="sales-quality-container">
                {salesQualityIndexes.map((salesIndex) => {
                    return <SalesQualityIndex salesIndex={salesIndex} key={salesIndex.id}/>
                })}
            </div>
            <div className={"sales-quality-overall-container"}>
                <SalesQualityOverall value={salesQuality.overall} />
            </div>
        </div>

    );
};

export default SalesQuality;
