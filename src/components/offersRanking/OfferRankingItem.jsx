
let imgValue;
let imgMoney;
let imgAmount;

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
    return frequency === 'least' ? (<div>
        <img src={imgAmount} alt={'amount'}/>
        <div>{amount}</div>
    </div>) : (<div>
        <img src={imgMoney} alt={'money'}/>
        <div>{money}</div>
    </div>)

}

const ImageWithValue = ({value}) => {
    return (<div>
        <img src={imgValue} alt={'value'}/>
        <div>{value}</div>
    </div>)
}