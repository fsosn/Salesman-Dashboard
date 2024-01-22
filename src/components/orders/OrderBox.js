import { Link } from "react-router-dom";
import "./OrderBox.css";

const OrderBox = ({ title, number, to }) => (

    <div className="col m-2">
        <div className="card">
            <div className="card-body text-center d-flex flex-column align-items-center">
                <Link to={to} className="d-flex align-items-middle card-title box-title">
                    {`${title}`}
                </Link>
                <span className="card-text box-number">{number}</span>
            </div>
        </div>
    </div>
);

export default OrderBox;
