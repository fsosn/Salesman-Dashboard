import './OfferRankingItem.css'

let imgValue = "https://freepngimg.com/thumb/categories/1325.png";
let imgMoney = "https://lh3.googleusercontent.com/proxy/YpkK8ev6JxPOkPR6dc0Viys6ySHsOVRPw-dwwM2gDSgfwqp2MXsUCNqrUEz4HYQkUV6CQRVSTooRkuRSF473znPxZ4OKwbEBu73RlfoKppm1R4hb-vU"
let imgAmount = "https://cdn-icons-png.flaticon.com/512/2413/2413651.png"

const OfferRankingItem = ({frequency ,offerRankingItem}) => {

    let {img, name, value, money, amount} = offerRankingItem

    return (<div className="offer-ranking-item-container">
        <div className='offer-ranking-item-img-container'>
            <img src={img} alt={name} className='offer-ranking-item-img'/>
        </div>
        <div className='offer-ranking-item-name-values-container'>
            <div className='offer-ranking-item-name'>
                {name}
            </div>
            <div className='offer-ranking-item-name-values'>
                <div className='offer-ranking-item-name-value'>
                    <ImageWithValue value={value}/>
                </div>
                <div className='offer-ranking-item-name-value'>
                    <ImageWithMoneyAmount frequency={frequency} amount={amount} money={money}/>
                </div>
            </div>
        </div>
    </div>)
}

const ImageWithMoneyAmount = ({frequency, amount, money}) => {
    return frequency === 'Least' ? (<div>
        <img src={imgAmount} alt={'amount'}/>
        <div>{amount}</div>
    </div>) : (<div>
        <img src={imgMoney} alt={'money'}/>
        <div>{money}$</div>
    </div>)

}

const ImageWithValue = ({value}) => {
    return (<div>
        <img src={imgValue} alt={'value'}/>
        <div>{value}</div>
    </div>)
}

export default OfferRankingItem;