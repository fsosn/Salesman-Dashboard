let winIcon = "https://cdn.icon-icons.com/icons2/1603/PNG/512/awward-reward-cup-win-first-place_108578.png"

const SalesQualityOverall = ({value}) => {
    return <div className='sales-quality-overall-container'>
        {value === 5 ? <div style={{display: 'flex'}}>
            <h5 style={{fontWeight: 600, fontSize: '17px'}}>Top performer</h5>
            <img src={winIcon} style={{width: '25px', height: '25px', marginLeft: '0.6rem'}}/>
        </div> : <h5 style={{fontSize: '15px'}}>Top performer</h5>}
        {value === 4 ? <div style={{display: 'flex'}}>
            <h5 style={{fontWeight: 600, fontSize: '17px'}}>Expert Seller</h5>
            <img src={winIcon} style={{width: '25px', height: '25px', marginLeft: '0.6rem'}}/>
        </div> : <h5 style={{fontSize: '15px'}}>Expert Seller</h5>}
        {value === 3 ? <div style={{display: 'flex'}}>
            <h5 style={{fontWeight: 600, fontSize: '17px'}}>Competent Seller</h5>
            <img src={winIcon} style={{width: '25px', height: '25px', marginLeft: '0.6rem'}}/>
        </div> : <h5 style={{fontSize: '15px'}}>Competent Seller</h5>}
        {value === 2 ? <div style={{display: 'flex'}}>
            <h5 style={{fontWeight: 600, fontSize: '17px'}}>Average Seller</h5>
            <img src={winIcon} style={{width: '25px', height: '25px', marginLeft: '0.6rem'}}/>
        </div> : <h5 style={{fontSize: '15px'}}>Average Seller</h5>}
        {value === 1 ? <div style={{display: 'flex'}}>
            <h5 style={{fontWeight: 600, fontSize: '17px'}}>Novice Seller</h5>
            <img src={winIcon} style={{width: '25px', height: '25px', marginLeft: '0.6rem'}}/>
        </div> : <h5 style={{fontSize: '15px'}}>Novice Seller</h5>}
    </div>
}

export default SalesQualityOverall;