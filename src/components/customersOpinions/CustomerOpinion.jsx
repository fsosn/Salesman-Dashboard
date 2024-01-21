import './CustomerOpinion.css'
const CustomerOpinion = ({opinion}) => {
    let {name, comment, rating, img} = {...opinion};

    return (
        <div className="customer-opinion-container">
            <CustomerImageWithName img={img} name={name}/>
            <CustomerStarsAndComment rating={rating} comment={comment}/>
        </div>
    );
};


let CustomerImageWithName = ({img, name}) => {
    return (<div className="customer-img-name">
        <img src={img} className="customer-image"/>
        <p className="customer-name">
            {name}
        </p>
    </div>)
}

const CustomerStarsAndComment = ({ rating, comment }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(
                <div key={i} className="customer-star">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/2153px-Star_icon_stylized.svg.png"
                        alt={`Star ${i + 1}`}
                        className="customer-star"
                    />
                </div>
            );
        }
        return stars;
    };

    return (
        <div className="customer-stars-comment">
            <div className="customer-stars">{renderStars()}</div>
            <p className="customer-comment">{comment}</p>
        </div>
    );
};

export default CustomerOpinion;