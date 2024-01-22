import {useDispatch, useSelector} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
import {chooseProfile, setProfile} from '../../features/MultiAccount/multiAccountSlice.js';
import './ProfileInfo.css'
import {changeOpinions} from "../../features/CustomersOpinions/customersOpinionsSlice.js";
import {changeSalesQuality} from "../../features/SalesQuality/salesQualitySlice.js";
import {changeOrderCount} from "../../features/orderCount/orderCountSlice.js";
import {changeOfferRanking} from "../../features/OfferRanking/offerRankingSlice.js";
import {changeSalesChartData} from "../../features/salesChart/salesChartSlice.js";

const ProfileInfo = () => {
    const dispatch = useDispatch();
    const availableProfiles = useSelector((state) => state.multiAccounts.availableProfiles);
    const currentProfile = useSelector((state) => state.multiAccounts.profile.profileName);
    const [isProfileListOpen, setProfileListOpen] = useState(false);

    const handleProfileClick = (profileName) => {
        dispatch(setProfile(profileName));
        handleProfileChangeOnOpinions(profileName);
        handleProfileChangeOnSalesQuality(profileName);
        handleProfileChangeOnOrderCount(profileName);
        handleProfileChangeOnOffersRanking(profileName)
        handleProfileChangeOnSalesChart(profileName)
        setProfileListOpen(false);
    };

    const handleProfileChangeOnOpinions = (profileName) => {
        let chosenProfile = chooseProfile(profileName);
        let profileOpinions = chosenProfile.opinions
        dispatch(changeOpinions(profileOpinions));
    }

    const handleProfileChangeOnSalesQuality = (profileName) => {
        let chosenProfile = chooseProfile(profileName);
        let profileSalesQuality = chosenProfile.salesQuality
        dispatch(changeSalesQuality(profileSalesQuality));
    }

    const handleProfileChangeOnOrderCount = (profileName) => {
        let chosenProfile = chooseProfile(profileName);
        let profileOrderCount = chosenProfile.orderCount
        dispatch(changeOrderCount(profileOrderCount));
    }

    const handleProfileChangeOnOffersRanking = (profileName) => {
        let chosenProfile = chooseProfile(profileName);
        let profileOffersRanking = chosenProfile.offersRanking
        dispatch(changeOfferRanking(profileOffersRanking));
    }

    const handleProfileChangeOnSalesChart = (profileName) => {
        let chosenProfile = chooseProfile(profileName);
        let chartData = chosenProfile.chartData
        dispatch(changeSalesChartData(chartData));
    }

    return (
        <div className="user-info">
            <div className="profile-container" onClick={() => setProfileListOpen(!isProfileListOpen)}>
                <FontAwesomeIcon icon={faCircleUser} className="icon user-icon" />
                <div className="user-name-container">
                    <span className="account-name">Tom Cruise</span>
                    <span className="profile-info">{currentProfile}</span>
                </div>
                {isProfileListOpen && (
                    <ul className="profile-list">
                        {availableProfiles.map((profile) => (
                            <li key={profile.profileName} onClick={() => handleProfileClick(profile.profileName)}>
                                <div className="profile-info">
                                    <span className="profile-name">{profile.profileName}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ProfileInfo;
